function Feld() {
  var eingabe = prompt("Wie heißt du?", "");
  if (eingabe != null) {
    document.getElementById("HTML").innerHTML =
      "Hallo, " + eingabe + "!";
  }
}