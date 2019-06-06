function myfunction() {
    var i;
    var row = document.getElementsByClassName("row");
    var name = document.getElementsByClassName("name");
    for (i = 0; i <
        row.length; i++) {
        row[i].style.display = "none";
    }
    var text1 = document.getElementById(
        "text").value;
    for (i = 0; i < name.length; i++) {
        if (name[i].innerText.includes(text1)) {
            row[i].style.display = "table-row";
        }
    }
}