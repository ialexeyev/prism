/* SKILL UP application home page scripts */

window.onload = () => {
  document.body.style.opacity = "1";
}

/* Starting application */
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

/* Opening registration form */
function openSignUp(obj) {
  document.getElementById('signInFormBlock').style.transform = "rotateX(90deg)";
  document.getElementById('signUpFormBlock').style.display = "block";
  setTimeout(() => {
    document.getElementById('signUpFormBlock').style.transform = "rotateX(0deg)";
  }, "1000");
}

/* changing color on select field inside registration form */
function selectChangeColor(obj) {
  obj.style.color = "black";
}


/* Sign in main function */
function signIn(id, passw, err) {
  /* 1. check grammar mistakes */
  checkSignIn(id, passw, err);
  
}

/* Checking sign in form (frontend) */
function checkSignIn(userId, userPassw, errObj) {
  if(userId.value == "") {
    showErrorMsg(errObj, ERR_MSG_TXT_ID_EMPTY);
    paintErrField(userId);
    return false;
  }
}

/* Show error message */
function showErrorMsg(errorObj, msg) {
  errorObj.style.color = "red";
  errorObj.textContent = msg;
  errorObj.style.visibility = "visible";
}

/* Clear error message & fields */
function clearErrors(obj, err) {
  obj.style.background = "white";
  err.style.visibility = "hidden";
  clearErrField(obj);
}

/* Paint error field */
function paintErrField(obj) {
  obj.style.background = "#ecdada";
}

/* Clear error field */ 
function clearErrField(obj) {
  obj.style.background = "white";
}
