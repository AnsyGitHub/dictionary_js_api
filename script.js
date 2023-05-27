const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inp = document.getElementById("wording").value;
  fetch(`${url}${inp}`)
    .then((response) => response.json())
    .then((data) => {
      // Process the JSON data
      console.log(data); // or perform other operations with the data
      result.innerHTML = `
      <div class="word">
        <h3>${inp}</h3>
        <button onclick = "plays()">
          <i class="fas fa-volume-up"></i>
        </button>
      </div>
      <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
      </div>
      <p class="word-meaning">
       ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
      </p>`;
      sound.setAttribute("src",`${data[0].phonetics[0].audio}`)
      console.log(sound);
    })
    .catch(() => {
      result.innerHTML = `<h3 class = "error">Unable to find the word<h3>`;
    });
});
function plays(){

  sound.play();

}