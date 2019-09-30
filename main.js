let btn = document.querySelector(".btn");

btn.addEventListener("click", validateForm);



function validateForm() {
    var x = document.forms["myForm"]["fullName"].value;
    var x2 = document.forms["myForm"]["emailAddress"].value;
    var x3 = document.forms["myForm"]["mobilePhone"].value;
    if (x == "") {
        document.querySelector('.nope').innerHTML = 'UPS! Du mangler at udfylde noget.'
      return false;
    }
    if  (x2 == "") {
        document.querySelector('.nope2').innerHTML = 'UPS! Du mangler at udfylde noget.'
      return false;
    }
    if  (x3 == "") {
        document.querySelector('.nope3').innerHTML = 'UPS! Du mangler at udfylde noget.'
      return false;
    }
    else {
        return true;
    }
    
  }