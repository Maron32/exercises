function btnClick1(){
    let wordValue = document.getElementById("wordInput").value;
    let result = document.getElementById("result");
    result.textContent = wordValue;
}

let changeText = document.getElementById("result");

function btnClick2(){
    changeText.style.color = "";
}

function btnClick3(){
    changeText.style.color = "red";
}

function btnClick4(){
    changeText.style.color = "green"
}

function btnClick5(){
    changeText.style.cssText = "color: #ffff33;";
}

function btnClick6(){
    changeText.style.cssText = "color: #33ff33; ";
}