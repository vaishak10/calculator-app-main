window.onload = function () {
    if (parseInt(document.querySelector("body > div.calculator > div.calculator-heading > div > div.slider-level > input").defaultValue) === 0) chooseSlide();
}

let keysArray = [];

function applythemeCss(bodyCss, inputCss, screenCss, keypadCss, cssDelReset, equalCss, toggleCss, toggleSliderCss) {
    document.querySelector("body").style.cssText = bodyCss;
    var inputs = document.querySelectorAll(".button-row > input[type=button]");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.cssText = inputCss;
    }
    document.querySelector("body > div.calculator > div.calculator-screen").style.cssText = screenCss;
    document.querySelector("body > div.calculator > div.calculator-body").style.cssText = keypadCss;
    document.querySelector("body > div.calculator > div.calculator-body > div.button-row.one > input.del").style.cssText = cssDelReset;
    document.querySelector("body > div.calculator > div.calculator-body > div.button-row.five > input.reset").style.cssText = cssDelReset;
    document.querySelector("body > div.calculator > div.calculator-body > div.button-row.five > input.equal").style.cssText = equalCss;
    document.querySelector("body > div.calculator > div.calculator-heading > div > div.slider-level > input").style.cssText = toggleCss;
    document.querySelector("body > div.calculator > div.calculator-keyboard-rules").style.cssText = keypadCss;
}

function chooseSlide() {
    var value = parseInt(document.querySelector("body > div.calculator > div.calculator-heading > div > div.slider-level > input").value);
    console.log(`Theme Level: ${value + 1}`);
    let bodyCss, inputCss, screenCss, keypadCss, cssDelReset, equalCss, toggleCss;

    if (value === 0) {
        bodyCss = "background-color:hsl(222, 26%, 31%);color:#fff;";
        inputCss = "background-color:hsl(30, 25%, 89%);box-shadow:0px 3px hsl(32, 16%, 65%);color:hsl(221, 14%, 31%);";
        screenCss = "background-color:hsl(224, 36%, 15%);";
        keypadCss = "background-color:hsl(223, 31%, 20%);";
        cssDelReset = "background-color:hsl(285, 91%, 52%) !important;box-shadow: 0px 3px hsl(281deg 89% 26%) !important;color:#fff !important;";
        equalCss = "background-color:hsl(6, 63%, 50%) !important;box-shadow: 0px 3px hsl(6, 70%, 34%) !important;color:#fff !important;"
        toggleCss = "background-color:hsl(223, 31%, 20%);";
        applythemeCss(bodyCss, inputCss, screenCss, keypadCss, cssDelReset, equalCss, toggleCss);
    } else if (value === 1) {
        bodyCss = "background-color:hsl(0, 0%, 90%);color:hsl(60, 10%, 19%);";
        inputCss = "background-color:hsl(45, 7%, 89%);box-shadow:0px 3px hsl(35, 11%, 61%);color:hsl(60, 10%, 19%);";
        screenCss = "background-color:hsl(0, 0%, 93%);";
        keypadCss = "background-color:hsl(0, 5%, 81%)";
        cssDelReset = "background-color:hsl(185, 42%, 37%)!important;box-shadow: 0px 3px hsl(185, 58%, 25%) !important;color:#fff;";
        equalCss = "background-color:hsl(25, 98%, 40%) !important;box-shadow: 0px 3px hsl(25, 99%, 27%) !important;color:#fff;";
        toggleCss = "background-color:hsl(0, 5%, 81%);";
        applythemeCss(bodyCss, inputCss, screenCss, keypadCss, cssDelReset, equalCss, toggleCss);
    } else if (value === 2) {
        bodyCss = "background-color:hsl(268, 75%, 9%);color:hsl(52, 100%, 62%);";
        inputCss = "background-color:hsl(268, 47%, 21%);box-shadow:0px 3px hsl(290, 70%, 36%);color:hsl(52, 100%, 62%);";
        screenCss = "background-color:hsl(268, 71%, 12%);";
        keypadCss = "background-color:hsl(268, 71%, 12%);";
        cssDelReset = "background-color:hsl(281, 89%, 26%)!important;box-shadow: 0px 3px hsl(285, 91%, 52%) !important;color:#fff;";
        equalCss = "background-color:hsl(176, 100%, 44%) !important;box-shadow: 0px 3px hsl(177, 92%, 70%) !important;color:hsl(221, 14%, 31%);";
        toggleCss = "background-color:hsl(268, 71%, 12%);";
        applythemeCss(bodyCss, inputCss, screenCss, keypadCss, cssDelReset, equalCss, toggleCss);
    } else {
        console.log("Theme doesn't exists");
    }
}

function keyPress(event)
{
    let regex = /[0-9]|[.,+-/*]/;
    // used , as an alternate for √ which is not available the keyboard i was working on.
    if(regex.test(event.key)){
        if(event.key === ','){
            displayKeys('√');
        } else {
            displayKeys(event.key);
        }
    } else if (event.key === "Backspace"){
        deleteKey();
    }else if (event.key === "Delete"){
        resetKeys();
    } else if (event.key === "=" || event.key === "Enter"){
        getResult();
    } else {
        console.log("Not a part of calc keypad");
    }
}

function displayKeys(key) {
    let regex= /[.+-/*]/;
    keysArray.push(key);
    if(regex.test(keysArray[0]) || (/[√]/.test(keysArray[keysArray.length-1]) && /[√]/.test(keysArray[keysArray.length-2]))){
        keysArray.pop();
    } else if (regex.test(keysArray[keysArray.length-1]) && regex.test(keysArray[keysArray.length-2])){
        keysArray.pop();
    } else{
        document.querySelector("body > div.calculator > div.calculator-screen > p").innerHTML = keysArray.join('');
    }
}

function deleteKey() {
    if (keysArray.length === 0) {
        console.log("Delete operation failed: Keys array empty");
    } else {
        let keyPopped = keysArray.pop();
        console.log(`key popped: ${keyPopped}`);
        document.querySelector("body > div.calculator > div.calculator-screen > p").innerHTML = keysArray.join('');
    }
}

function resetKeys() {
    keysArray = [];
    document.querySelector("body > div.calculator > div.calculator-screen > p").innerHTML = "";
}

function getResult() {
    let regex = /[√]/;
    let expression = keysArray.join('');
    keysArray = expression.split(/([+-/*√])/).filter(Boolean);
    for(var i=0; i<keysArray.length; i++){
        if(regex.test(keysArray[i])){
            keysArray[i] = Math.sqrt(keysArray[i+1])
            keysArray.splice(i+1,1);
        }
    }
    let x = Function('return ' + keysArray.join(''))()
    if (x ||  x === 0) {
        document.querySelector("body > div.calculator > div.calculator-screen > p").innerHTML = parseFloat(x.toFixed(5));
    }else{
        console.log("Value's have not been entered");
        document.querySelector("body > div.calculator > div.calculator-screen > p").innerHTML = "";  
    }
    keysArray = [];
}

