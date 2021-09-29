var ButtonTranslate = document.querySelector("#translate-btn");
var resultOutput = document.querySelector("#translated-output");
const InputText = document.querySelector("#translate-text");

var serverUrl = "https://api.funtranslations.com/translate/sindarin.json";

function translation(text) {
  return serverUrl + "?" + "text=" + text;
}

function ErrrorHandler(error) {
  console.log(`error`, error);
}

function ClickHandler() {
  var textInput = InputText.value;
  fetch(translation(textInput))
    .then((res) => res.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      resultOutput.innerHTML = translatedText;
    })
    .catch(ErrrorHandler);
}

ButtonTranslate.addEventListener("click", ClickHandler);
