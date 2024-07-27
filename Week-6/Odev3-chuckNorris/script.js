//Btn Event
let btn = document
.querySelector("button")
.addEventListener("click", getJoke);

//FetchApi
function getJoke() {
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => jokes(data));
}

function jokes(data) {
const divDom = document.querySelector(".divDom");
divDom.innerHTML = `
<h3>${data.value}</h3>
`;
}

getJoke();