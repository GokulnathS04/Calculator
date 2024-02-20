let outPutScreen = document.getElementById("output")

function display(num) {
    outPutScreen.value += num
}

function calculate() {
    try {
        outPutScreen.value = eval(outPutScreen.value);
    }
    catch (err) {
        alert("Invalid")
    }
}

function Clear() {
    outPutScreen.value = "";
}

function del() {
    outPutScreen.value = outPutScreen.value.slice(0, -1);
}