document.getElementById("submitButton").onclick = function () {
    let temp;

    if (document.getElementById("cButton").checked) {
        temp = document.getElementById("myText").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("answer").innerHTML = temp + "°C";
    } else if (document.getElementById("fButton").checked) {
        temp = document.getElementById("myText").value;
        temp = Number(temp);
        temp = toFarenheit(temp);
        document.getElementById("answer").innerHTML = temp + "°F";
    } else {
        document.getElementById("answer").innerHTML = "Please select a value";

    }
}
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFarenheit(temp) {
    return temp * 5 / 9 + 32;

}