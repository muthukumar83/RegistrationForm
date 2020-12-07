// After form loads focus will go to User id field.
function firstfocus()
  {

    var today = new Date().toISOString().split('T')[0];
    document.registration.datepic.setAttribute('min', today);

  var uid = document.registration.userid.focus();
  return true;
  }

  // This function will validate User id.
  function userIdValidation()
  {
    var uid = document.registration.userid;
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid.value == "")
    {
    alert("Name should not be empty.");
    uid.focus();
    return false;
  }
  else
  {
    document.registration.emailid.focus();
    return true;
  }
}

// This function will validate Email id.
function emailIdValidation()
{
    var uemail = document.registration.emailid;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(mailformat))
  {
  document.registration.telephone.focus();
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  uemail.focus();
  return false;
  }
}

// This function will validate telephone.
function telephoneValidation()
{
    var utelephone = document.registration.telephone;
    var phonenoformt = /^\d{10}$/;
  if(utelephone.value.match(phonenoformt))
  {
      document.registration.password.focus();
      return true;
  }
  else
  {
     alert("Please enter a valid Phone Number");
     document.registration.telephone.focus();
     return false;
  }
}

// This function will validate password.
function passwordValidation()
{
    var upassword = document.registration.password;
    var upassword_len = upassword.value.length;
    if (upassword_len == 0 || upassword.value == "")
    {
    alert("Please enter your password.");
    upassword.focus();
    return false;
    }
    else
    {
        document.registration.datepic.focus();
        return true;
    }
}

// This function will validate date.
function dateValidation()
{
    var udate = document.registration.datepic;
    var udate_len = udate.value.length;
    if (udate_len == 0 || udate.value == "")
    {
    alert("Please enter date.");
    document.registration.datepic.focus();
    return false;
    }
    else
    {
        document.registration.from.focus();
        return true;
    }
}

// This function will validate from  date.
function fromdateValidation()
{
    var frmdate = document.registration.from;
    var frmdate_len = frmdate.value.length;
    if (frmdate_len == 0 || frmdate.value == "")
    {
    alert("Please enter from date.");
    document.registration.from.focus();
    return false;
    }
    else
    {
        document.registration.to.focus();
        return true;
    }
}

// This function will validate to  date.
function todateValidation()
{
    var todate = document.registration.to;
    var todate_len = todate.value.length;
    if (todate_len == 0 || todate.value == "")
    {
    alert("Please enter to date.");
    return false;
    }
}

//This function will display the number of days.
function  dateDiff(){

    var fDate = new Date(document.registration.from.value);
    var tDate = new Date(document.registration.to.value);

    var days = parseInt((tDate - fDate) / (24 * 3600 * 1000));

    document.getElementById("dateRange").innerHTML = days + " Day(s) "
  }

  //This function will submit the values 
  function Formsubmit()
  {
    alert('Form submitted successfully');
    document.registration.userid = "";
    document.registration.emailid.value = "";
    document.registration.telephone.value = "";
    document.registration.password.value = "";
    document.registration.datepic.value = "";
    document.registration.from.value = "";
    document.registration.to.value = "";
  }


