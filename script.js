let inputName = document.getElementById("inputName");
let header = document.getElementById("header");
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");

signinBtn.onclick = function () {
  inputName.style.display = "none";
  header.innerHTML = "sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
  inputName.style.display = "block";
  header.innerHTML = "sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};
