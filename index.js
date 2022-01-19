const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const waitTillHTMLRendered = async (page, timeout = 30000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;

    while (checkCounts++ <= maxChecks) {
        let html = await page.content();
        let currentHTMLSize = html.length;

        let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitForTimeout(checkDurationMsecs);
    }
};
app.post('/screenshot', (async (req, res) => {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.deepl.com/translator#" + req.body.sceltaUtenteIN + "/" + req.body.sceltaUtenteOUT + "/", { waitUntil: 'load' });
    await page.type("#source-dummydiv", req.body.testoUtente)
    await waitTillHTMLRendered(page)
    const grabTraduzinoe = await page.evaluate(() => {
        const frase = document.querySelector("#target-dummydiv");
        return frase.innerHTML;
    })
    console.log(grabTraduzinoe)
    await browser.close();


    res.json({
        success: true,
        grabTraduzinoe
    })
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});