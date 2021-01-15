function validateForm() {
  var x = document.forms["myForm"]["ffname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["pass"].value;
if (x == "") {
  alert("Password must be filled out");
  return false;
}

}
