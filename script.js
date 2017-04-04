function attachNumber(event) {
    var nummie = event.target.value;
    document.getElementById("calcDisplay2").value += nummie;
    event.preventDefault();
}

function attachAllClear(event) {
    document.getElementById("calcDisplay2").value = "";
    event.preventDefault();
}

function attachEvaluate(event) {
    document.getElementById("calcDisplay2").value = eval(document.getElementById("calcDisplay2").value);
    event.preventDefault();
}

