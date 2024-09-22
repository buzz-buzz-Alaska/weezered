// TODO: Impliment this solution when I'm not exteremely tired: https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome#:~:text=Update%20August%202019-,Solution%20%233,-As%20an%20alternative

let already_played = false;

function weez() {
  console.log("interaction");
  if (already_played === false) {
    console.log("now simulating");
    let weezing = new Audio(
      "https://github.com/buzz-buzz-Alaska/weezered/raw/refs/heads/main/assets/audio/buddyholly.mp3"
    );
    weezing.load();

    let navbartitle = document.getElementById("navbartitle");
    navbartitle.innerText = "Weezer";
    let navweez = document.getElementById("navweez");
    navweez.classList.add("lol");
    navweez.classList.remove("w");

    weezing.play();
    already_played = true;
  }
}

// NOTE: Browsers DO NOT count `onmousemove`, or `onscroll` as valid user input for autoplay.

window.onmousedown = function () {
  console.log("onmousedown");
  weez();
};

window.onkeydown = function () {
  console.log("onkeydown");
  weez();
};

window.onload = function () {
  let mmodal = document.getElementById("modal-1");
  new bootstrap.Modal(mmodal).show();
};
