var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
      document.body.className = "day";
    }
}
else {
    if (document.body) {
      document.body.className = "night";

    }
}
