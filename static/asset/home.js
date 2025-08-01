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
   /* 1. checking user ID */
  if(userId.value == "") {
    showErrorMsg(errObj, ERR_MSG_TXT_ID_EMPTY);
    paintErrField(userId);
    return false;
  }
  else if(userId.value.length > 30) {
    showErrorMsg(errObj, ERR_MSG_TXT_ID_INCREASED_LENGTH);
    paintErrField(userId);
    return false;
  }
  else if(((/^[a-z.]+$/).test(userId.value)) == false) {
    showErrorMsg(errObj, ERR_MSG_TXT_ID_INVALID);
    paintErrField(userId);
    return false;
  }
  /* 2. checking user password */
  else if(userPassw.value == "") {
    showErrorMsg(errObj, ERR_MSG_TXT_PASS_EMPTY);
    paintErrField(userPassw);
    return false;
  }
  else if(userPassw.value.length > 20) {
    showErrorMsg(errObj, ERR_MSG_TXT_PASS_INCREASED_LENGTH);
    paintErrField(userPassw);
    return false;
  }
  else if(((/^[A-Za-z0-9*.]+$/).test(userPassw.value)) == false) {
    showErrorMsg(errObj, ERR_MSG_TXT_PASS_INVALID);
    paintErrField(userPassw);
    return false;
  }
  else {
    synchro(errObj);
    return true;
  }
}

/*Checking sign up form (frontend)*/
function checkSignUp(firstid,
                     firstname,
                     lastname,
                     mail,
                     department,
                     supervisor,
                     errObj) {
  /* 1. checking first ID */
  if(firstid.value == "") {
    showErrorMsg(errObj, ERR_MSG_TXT_ID_EMPTY);
    paintErrField(firstid);
    return false;
  }
  else if(firstid.value.length > 30) {
    showErrorMsg(errObj, ERR_MSG_TXT_ID_INCREASED_LENGTH);
    paintErrField(firstid);
    return false;
  }
  else if(((/^[a-z.]+$/).test(firstid.value)) == false) {
    showErrorMsg(errObj, ERR_MSG_TXT_ID_INVALID);
    paintErrField(firstid);
    return false;
  }
  /* 2. Checking first name */
  if(firstname.value == "") {
    showErrorMsg(errObj, ERR_MSG_TXT_FIRST_NAME_EMPTY);
    paintErrField(firstname);
    return false;
  }
  else if(firstname.value.length > 25) {
    showErrorMsg(errObj, ERR_MSG_TXT_FIRST_NAME_INCREASED_LENGTH);
    paintErrField(firstname);
    return false;
  }
  else if(((/^[A-Za-z.]+$/).test(firstname.value)) == false) {
    showErrorMsg(errObj, ERR_MSG_TXT_FIRST_NAME_INVALID);
    paintErrField(firstname);
    return false;
  }
  else if(firstname.value[0] !== firstname.value[0].toUpperCase()) {
    showErrorMsg(errObj, ERR_MSG_TXT_FIRST_NAME_INVALID_FIRST_LETTER);
    paintErrField(firstname);
    return false;
  }
  else if(/[A-Z]/.test(firstname.value.slice(1))) {
    showErrorMsg(errObj, ERR_MSG_TXT_FIRST_NAME_INVALID);
    paintErrField(firstname);
    return false;
  }
  /* 3 Checking last name */
  if(lastname.value == "") {
    showErrorMsg(errObj, ERR_MSG_TXT_LAST_NAME_EMPTY);
    paintErrField(lastname);
    return false;
  }
  else if(lastname.value.length > 30) {
    showErrorMsg(errObj, ERR_MSG_TXT_LAST_NAME_INCREASED_LENGTH);
    paintErrField(lastname);
    return false;
  }
  else if(((/^[A-Za-z.]+$/).test(lastname.value)) == false) {
    showErrorMsg(errObj, ERR_MSG_TXT_LAST_NAME_INVALID);
    paintErrField(lastname);
    return false;
  }
  else if(lastname.value[0] !== lastname.value[0].toUpperCase()) {
    showErrorMsg(errObj, ERR_MSG_TXT_LAST_NAME_INVALID_FIRST_LETTER);
    paintErrField(lastname);
    return false;
  }
  else if(/[A-Z]/.test(lastname.value.slice(1))) {
    showErrorMsg(errObj, ERR_MSG_TXT_LAST_NAME_INVALID);
    paintErrField(lastname);
    return false;
  }
  /* 4. Checking email */
  if(mail.value == "") {
    showErrorMsg(errObj, ERR_MSG_TXT_EMAIL_EMPTY);
    paintErrField(mail);
    return false;
  }
  else if(mail.value.length > 40) {
    showErrorMsg(errObj, ERR_MSG_TXT_EMAIL_INCREASED_LENGTH);
    paintErrField(mail);
    return false;
  }
  else if(((/^[A-Za-z.@-]+$/).test(mail.value)) == false) {
    showErrorMsg(errObj, ERR_MSG_TXT_EMAIL_INVALID);
    paintErrField(mail);
    return false;
  }
  else if((!(mail.value.endsWith('@hyundai.kz'))) && (!(mail.value.endsWith('@astana-motors.kz')))) {
    showErrorMsg(errObj, ERR_MSG_TXT_EMAIL_INVALID_DOMAIN);
    paintErrField(mail);
    return false;
  } 
  else if((mail.value === "@hyundai.kz") || (mail.value === "@astana-motors.kz")) {
    showErrorMsg(errObj, ERR_MSG_TXT_EMAIL_INVALID);
    paintErrField(mail);
    return false;
  }
  /* 5. Checking departments list */
  else if(department.value == "Department") {
    showErrorMsg(errObj, ERR_MSG_TXT_SELECT_DEPARTMENT_EMPTY);
    paintErrField(department);
    return false;
  }
  /* 6. Checking supervisors list */
  else if(supervisor.value == "Supervisor") {
    showErrorMsg(errObj, ERR_MSG_TXT_SELECT_SUPERVISOR_EMPTY);
    paintErrField(supervisor);
    return false;
  }
  else {
    synchro(errObj);
    return true;
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

/* Showing message about synchronizing with database () */
function synchro(err) {
  err.style.color = "#003a84";
  err.textContent = SYNCHRO_TXT_MAIN;
  err.style.visibility = "visible";
}