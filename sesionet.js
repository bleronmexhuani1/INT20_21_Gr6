function clickCounter1() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result1").innerHTML = "Submit është bërë " + localStorage.clickcount + " herë";
    writeln("result1");
  } else {
    document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
