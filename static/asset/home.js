/* SKILL UP application home page scripts */

window.onload = () => {
  document.body.style.opacity = "1";
}

function appstart(obj) {
  obj.style.opacity = "0";
  document.getElementById('signinimg').style.display = "block";
  setTimeout(() => {
    obj.style.display = "none";
    document.getElementById('signinimg').style.transform = "rotateY(0deg)";
  }, "1000");
  setTimeout(() => {  
    document.getElementById('signInFormBlock').style.transform = "rotateX(0deg)";
  }, "2000");
}


function openSignUp(obj) {
  document.getElementById('signInFormBlock').style.transform = "rotateX(90deg)";
  document.getElementById('signUpFormBlock').style.display = "block";
  setTimeout(() => {
    document.getElementById('signUpFormBlock').style.transform = "rotateX(0deg)";
  }, "1000");
}

function selectChangeColor(obj) {
  obj.style.color = "black";
}