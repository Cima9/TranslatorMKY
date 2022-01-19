<template>
  <div class="AllFormCenter">
    <form @submit.prevent="requestTranslate">
      <div class="row rowBoxCenter">
        <div class="col-5">
          <select
            name=""
            id=""
            v-model="sceltaUtenteIN"
            class="buttonInput"
            required
          >
            <option value="bg">Bulgaro</option>
            <option value="cs">Ceco</option>
            <option value="zh">Cinese</option>
            <option value="da">Danese</option>
            <option value="et">Estone</option>
            <option value="fi">Finlandese</option>
            <option value="fr">Francese</option>
            <option value="ja">Giapponese</option>
            <option value="el">Greco</option>
            <option value="en">Inglese</option>
            <option value="it">Italiano</option>
            <option value="lv">Lettone</option>
            <option value="lt">Lituano</option>
            <option value="nl">Olandese</option>
            <option value="pl">Polacco</option>
            <option value="pt">Portoghese</option>
            <option value="ro">Rumeno</option>
            <option value="ru">Russo</option>
            <option value="sk">Slovacco</option>
            <option value="sl">Sloveno</option>
            <option value="es">Spagnolo</option>
            <option value="sv">Svedese</option>
            <option value="de">Tedesco</option>
            <option value="hu">Ungherese</option>
          </select>
          <textarea
            name="testoUtente"
            id="testoUtente"
            v-model="testoUtente"
            placeholder="Inserisci il testo da tradurre"
            class="TextInput"
            maxlength="5000"
            required
          ></textarea>
        </div>
        <div class="col-2">
          <div
            class="d-flex justify-content-center"
            v-if="this.traduzione == ' '"
          >
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div class="col-5">
          <select
            name=""
            id=""
            v-model="sceltaUtenteOUT"
            class="buttonInput"
            required
          >
            <option value="bg">Bulgaro</option>
            <option value="cs">Ceco</option>
            <option value="zh">Cinese</option>
            <option value="da">Danese</option>
            <option value="et">Estone</option>
            <option value="fi">Finlandese</option>
            <option value="fr">Francese</option>
            <option value="ja">Giapponese</option>
            <option value="el">Greco</option>
            <option value="en">Inglese</option>
            <option value="it">Italiano</option>
            <option value="lv">Lettone</option>
            <option value="lt">Lituano</option>
            <option value="nl">Olandese</option>
            <option value="pl">Polacco</option>
            <option value="pt">Portoghese</option>
            <option value="ro">Rumeno</option>
            <option value="ru">Russo</option>
            <option value="sk">Slovacco</option>
            <option value="sl">Sloveno</option>
            <option value="es">Spagnolo</option>
            <option value="sv">Svedese</option>
            <option value="de">Tedesco</option>
            <option value="hu">Ungherese</option>
          </select>
          <textarea
            name="testoUtente"
            id="testoUtente"
            v-model="traduzione"
            placeholder="Testo tradotto"
            class="TextOutput"
            readonly
          >
          </textarea>
        </div>
        <input type="submit" value="Translate!" class="buttontranslate" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  components: {},
  setup() {
    const testoUtente = ref("");
    const sceltaUtenteIN = ref("");
    const sceltaUtenteOUT = ref("");
    const traduzione = ref("");

    const requestTranslate = async () => {
      traduzione.value = " ";
      const res = await fetch("http://localhost:4000/screenshot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          testoUtente: testoUtente.value,
          sceltaUtenteIN: sceltaUtenteIN.value,
          sceltaUtenteOUT: sceltaUtenteOUT.value,
        }),
      }).then((data) => data.json());
      traduzione.value = res.grabTraduzinoe;
    };
    return {
      testoUtente,
      sceltaUtenteIN,
      sceltaUtenteOUT,
      traduzione,
      requestTranslate,
    };
  },
};
</script>
