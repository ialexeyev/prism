/* SKILL UP application home page scripts */

window.onload = () => {
  document.body.style.opacity = "1";
}

function appstart(obj) {
  obj.style.opacity = "0";
  setTimeout(() => {
    obj.style.display = "none";
    document.getElementById('signinimg').style.transform = "rotateY(0deg)";
  }, "1000");
  setTimeout(() => {
    document.getElementById('signInFormBlock').style.transform = "rotateX(0deg)";
  }, "2000");
}