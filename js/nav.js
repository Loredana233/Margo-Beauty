function mobileMenu() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}