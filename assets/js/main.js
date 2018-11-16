//Turn on and off the light
function turnOnLight() {
    document.getElementById('bulb').src = "assets/images/pic_bulbon.gif";
}

function turnOffLight() {
    document.getElementById('bulb').src = "assets/images/pic_bulboff.gif";
}

//Change the sentence
function changeSentence() {
    document.getElementById('change-sentence').innerHTML = "This is the new sentence after you clicked the button.";
}

//Display Date & Time
function displayDateTime() {
    document.getElementById('display-date-time').innerHTML = Date();
}

//Change Content
function changeContent() {
    document.getElementById('change-content').innerHTML = "AH..HA.. Told ya!"
}

//Using InnerHTML
function usingInnerHtml() {
    document.getElementById('using-inner-html').innerHTML = 5 + 6;
}

//Using document.write()
function usingDocumentWrite() {
    document.write(1+6);
}

//Using window.alert()
function usingWindowAlert() {
    window.alert(5+10);
}

//Using console.log()
function usingConsoleLog() {
    console.log(0+1);
}