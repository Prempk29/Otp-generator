function generatemama() {
    var num1 = Math.floor((Math.random() * (9)) + 1);
    var num2 = Math.floor((Math.random() * (9)) + 1);
    var num3 = Math.floor((Math.random() * (9)) + 1);
    var num4 = Math.floor((Math.random() * (9)) + 1);
    var result = num1 * 1000 + num2 * 100 + num3 * 10 + num4;
    document.getElementById("generate").value = result;

}
function generatema() {
    var copyText = document.getElementById("generate");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}