const dropDown = document.querySelector("#moods");
const body = document.querySelector("body");

dropDown.addEventListener("change", function (e) {
  let mood = e.target.value;

  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.remove("passionate");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("happy");
    body.classList.remove("sad");
    body.classList.add("passionate");
  }
});
