// HW=====================================================================
// write search form, witch open by click on icon and close on eny other click on the page but the form.
// also we can close the form by Esc on keyboard.
// for searchfield add counter of symbols.

const link = document.querySelector(".link");
const info = document.querySelector(".info");
const searchForm = document.querySelector(".search-form");
const searcher = document.querySelector(".searcher");
const searchButton = document.querySelector(".search-button");

//hanging listeners:
searchButton.addEventListener("click", message);
document.addEventListener("click", searcher2go);

function searcher2go(event) {
  if (event.target.closest(".link")) {
    searchForm.classList.toggle("_active");
  }
  if (!event.target.closest(".searchfield")) {
    searchForm.classList.remove("_active");
    searcher.value = "";
  }
}

//when the search button is pushed:
function message(event) {
  info.classList.toggle("_active");
  event.preventDefault();
}

// counter:
const txtItemLimit = searcher.getAttribute("maxlength");
const txtCounter = document.querySelector(".counter2 span");
txtCounter.innerHTML = txtItemLimit;

searcher.addEventListener("keyup", txtSetCounter);
searcher.addEventListener("keydown", function (event) {
  if (event.repeat) txtSetCounter();
});
function txtSetCounter() {
  const txtCounterResult = txtItemLimit - searcher.value.length;
  txtCounter.innerHTML = txtCounterResult;
}

// add reaction on Esc (collapse menu):
document.addEventListener("keyup", function (event) {
  if (event.code === "Escape") {
    searchForm.classList.remove("_active");
    searcher.value = "";
  }
});
