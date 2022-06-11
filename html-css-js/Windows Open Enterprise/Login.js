function myFunction() {
    var x = document.getElementById("txt2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

