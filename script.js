// LermoSource Technology (C)    Product DK Studio 2024
    function changeTitle() {
    var titles = ["uPanelCode  ", "uPanelCode 4", "WORKSPACE"];
    var index = Math.floor(Math.random() * titles.length);
    document.title = titles[index];
}
    setInterval(changeTitle, 1000);



    function analytics(){
    document.getElementById("analytics").style.display = "block";
    document.getElementById("wallet").style.display = "none";
    document.getElementById("chart").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("setting").style.display = "none";
}


function market(){
    document.getElementById("market").style.display = "block";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("wallet").style.display = "none";
    document.getElementById("chart").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("setting").style.display = "none";
}


    function wallet(){
    let rd = document.getElementById('area')
    let cat = localStorage.getItem("myCat");
    rd.innerHTML=  cat;
    document.getElementById("analytics").style.display = "none";
    document.getElementById("wallet").style.display = "block";
    document.getElementById("chart").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("setting").style.display = "none";
}



    function trade(){
    document.getElementById("analytics").style.display = "none";
    document.getElementById("wallet").style.display = "none";
    document.getElementById("chart").style.display = "block";
    document.getElementById("info").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("setting").style.display = "none";
}



    function information(){
    document.getElementById("analytics").style.display = "none";
    document.getElementById("wallet").style.display = "none";
    document.getElementById("chart").style.display = "none";
    document.getElementById("info").style.display = "block";
    document.getElementById("card").style.display = "none";
    document.getElementById("setting").style.display = "none";
}



    function card(){
    document.getElementById("analytics").style.display = "none";
    document.getElementById("wallet").style.display = "none";
    document.getElementById("chart").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("card").style.display = "block";
    document.getElementById("setting").style.display = "none";
}



    function setting(){
    document.getElementById("analytics").style.display = "none";
    document.getElementById("wallet").style.display = "none";
    document.getElementById("chart").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("setting").style.display = "block";
}





    function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    document.getElementById('clock').innerHTML = timeString;
    }
    setInterval(updateTime, 1000);




function saveTextAsFile() {
    const textToSave = document.getElementById("area").value;
    const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    const fileNameToSaveAs = "index.html";

    const downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function start(){
    let yu = document.getElementById("area").value;
    document.writeln(yu);
}

function startemu(){
    let yu = document.getElementById("area").value;
    document.getElementById('pl').innerHTML=yu;

}
function resetemu(){

    document.getElementById('pl').innerHTML="no connect";

}


function cx() {
    var y = document.getElementById("sizef");
    if (y.value == "Small") {
        document.getElementById("area").style.fontSize = "5px";
        document.getElementById("test").style.fontSize = "5px";
    }
    if (y.value == "Big") {
        document.getElementById("area").style.fontSize = "60px";
        document.getElementById("test").style.fontSize = "60px";
    }
    if (y.value == "Normal") {
        document.getElementById("area").style.fontSize = "15px";
        document.getElementById("test").style.fontSize = "15px";
    }


    var x = document.getElementById("selectd");
    if (x.value == "Arial Black") {
        document.getElementById("area").style.fontFamily = "Arial Black";
        document.getElementById("test").style.fontFamily = "Arial Black";
    }
    if (x.value == "Apple LiGothic") {
        document.getElementById("area").style.fontFamily = "Apple LiGothic";
        document.getElementById("test").style.fontFamily = "Apple LiGothic";
    }
    if (x.value == "Apple Braille") {
        document.getElementById("area").style.fontFamily = "Apple Braille";
        document.getElementById("test").style.fontFamily = "Apple Braille";
    }
    if (x.value == "Apple Chancery") {
        document.getElementById("area").style.fontFamily = "Apple Chancery";
        document.getElementById("test").style.fontFamily = "Apple Chancery";
    }
    if (x.value == "Apple Symbols") {
        document.getElementById("area").style.fontFamily = "Apple Symbols";
        document.getElementById("test").style.fontFamily = "Apple Symbols";
    }
    if (x.value == "Apple SD Gothic Neo") {
        document.getElementById("area").style.fontFamily = "Apple SD Gothic Neo";
        document.getElementById("test").style.fontFamily = "Apple SD Gothic Neo";
    }
    if (x.value == "Sergoe UI Symbol") {
        document.getElementById("area").style.fontFamily = "Sergoe UI Symbol";
        document.getElementById("test").style.fontFamily = "Sergoe UI Symbol";
    }
    if (x.value == "Arial") {
        document.getElementById("area").style.fontFamily = "Arial";
        document.getElementById("test").style.fontFamily = "Arial";
    }
    if (x.value == "Roboto light") {
        document.getElementById("area").style.fontFamily = "Roboto light";
        document.getElementById("test").style.fontFamily = "Roboto light";
    }
    if (x.value == "Sans-serif") {
        document.getElementById("area").style.fontFamily = "Sans-serif";
        document.getElementById("test").style.fontFamily = "Sans-serif";
    }
    if (x.value == "Impact") {
        document.getElementById("area").style.fontFamily = "Impact";
        document.getElementById("test").style.fontFamily = "Impact";
    }
    if (x.value == "Times New Roman") {
        document.getElementById("area").style.fontFamily = "Times New Roman";
        document.getElementById("test").style.fontFamily = "Times New Roman";
    }


}

let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#color-picker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

function updateFirst(event) {
    const p = document.querySelector("textarea");
    if (p) {
        p.style.color = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll("textarea").forEach((p) => {
        p.style.color = event.target.value;
    });
}

function openPopup() {
    document.getElementById("myPopup").style.display = "block";
    setTimeout(() => {
        document.getElementById("q").style.display = "block";
    }, "500");
}
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
    document.getElementById("q").style.display = "none";
}


function center(){
    document.getElementById("area").style.textAlign="center";
    document.getElementById("test").style.textAlign="center";
}
function right(){
    document.getElementById("area").style.textAlign="right";
    document.getElementById("test").style.textAlign="right";
}
function left(){
    document.getElementById("area").style.textAlign="left";
    document.getElementById("test").style.textAlign="left";
}

function scriptfont(){
    document.getElementById("area").style.fontFamily = "Apple Symbols";
    document.getElementById("test").style.fontFamily = "Apple Symbols";
}

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


function  cook() {
    var dfrrrrrr = document.getElementById("area").value
    localStorage.setItem("myCat", dfrrrrrr);
    alert("Code is save in HTplay")

}

function get() {
    let rd = document.getElementById('area')
    let cat = localStorage.getItem("myCat");
    rd.innerHTML=  cat;

}

function log() {
    let rd = document.getElementById('sdk')
    let cat = localStorage.getItem("myCat");
    rd.innerHTML = cat;

}

function cpu() {
    let rd = document.getElementById('sdk')
    let cat = localStorage.getItem("myCat");
    rd.innerHTML = "Loading...";
    setTimeout(function() {
        rd.innerHTML = "uPanelCode 4 WorkSpace for MacOS edition Bionic\n" +
            "     ****************************************\n" +
            "     NameProduct: uPanelCode\n" +
            "     VersionProduct: 4.0\n" +
            "     CodeNameProduct: Bionic\n" +
            "     TypePanelCode: WorkSpace\n" +
            "     TypeProduct: IT and Work Manager Product \n" +
            "     *****************************************\n" +
            "     ID Product: 46739523959034850\n" +
            "     FindID: 7890\n" +
            "     Internal Operration Service (IOP): 1Q37I73\n" +
            "     IDWorkspace: 469B12\n" +
            "     DataRelease: 01.06.2024 12:00:00 Sunday (day) \n" +
            "     *****************************************\n" +
            "     Technology: Vantage Aniamtion 4.5\n" +
            "                 Vantage PalmText 7\n" +
            "                 Vantage HDcolor\n" +
            "                 Vantage Code #8500\n" +
            "                 SQH Framework Gen 1.5\n" +
            "                 SQH HOST\n" +
            "                 uLogic core 1\n" +
            "                 uLogic core 2\n" +
            "                 uLogic core 3\n" +
            "                 uLogic Gen 1\n" +
            "                 Electron frame\n" +
            "                 Apple Font (c)\n" +
            "                 BlueKit Graphics 1\n" +
            "                 WebKit Support \n" +
            "                 HTPlay WorkSpace 1\n" +
            "                 Widget Weather \n" +
            "     *****************************************\n" +
            "     BlueKit Graphical WorkSpace 1\n" +
            "     \n" +
            "     ID: 8642394723842893748937429374\n" +
            "     IOP: 3J289379II_POP\n" +
            "     Version: 1\n" +
            "     Use Technology: Vantage Aniamtion 4.5\n" +
            "                     Vantage HDcolor \n" +
            "                     Apple Font (c)\n" +
            "                     Widget Weather\n" +
            "    ******************************************\n" +
            "    Support Product: MacOS 11+\n" +
            "       *THIS PRODUCT NO SUPPORT IN MICROSOFT WINDOWS*\n" +
            "    ******************************************\n" +
            "     Electron Framework DMG\n" +
            "     \n" +
            "     ID: 37428937492837429387428934729387429374239\n" +
            "     IOP: 6T749KIT\n" +
            "     VersionFrame: 30.0.1\n" +
            "     Work in: JavaScript, Python, C++, Objective-C\n" +
            "     Author: GitHub inc\n" +
            "\n" +
            "    ******************************************\n" +
            "    INFORMATION THIS APPLICATION \n" +
            "\n" +
            "    Name: uPanelCode\n" +
            "    SubName: uPanelCode 4 Bionic for MacOS\n" +
            "    commentaries: uPanelCode WorkSpace BIONIC MacOS\n" +
            "    Version: 4 Bionic\n" +
            "    Type: .DMG\n" +
            "\n" +
            "    ******************************************\n" +
            "    TCO Group Certificated \n" +
            "    TCO WEB IDE Certificated\n" +
            "    macOS Support\n" +
            "    ******************************************\n" +
            "    DK Studio (c) All Rights Reserved 2023-2024\n" +
            "    DKM Laboratory (r)\n" +
            "    Yhome Link 2024\n" +
            "    ******************************************\n" +
            "           DK Studio ORIGIANL PRODUCT \n" +
            "    ******************************************\n" +
            "    \n" +
            "    \n" +
            "\n" +
            "    32UI897";
    }, 2000); // 2000 миллисекунд = 2 секунды

}

function shell() {
    let rd = document.getElementById('seaid').value
    if (rd === "delete[text from panelcode.cms]"){

        let rd = document.getElementById('area')

        rd.innerHTML=" ";
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command 'delete[text from panelcode.cms' is complite  ";

    }
    if (rd === "delete[text from sqh]"){

        localStorage.clear();
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command 'delete[text from sqh]' is complite  ";

    }
    if (rd === "save[text from panelcode.cms]"){
        saveTextAsFile()
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command 'save[text from panelcode.cms]' is complite  ";

    }
    if (rd === "Command 'save[text from panelcode.cms] in format[vantage]"){
        savevantage()
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command 'save[text from panelcode.cms] in format[vantage]' is complite  ";

    }
    if (rd === "Command 'save[text from panelcode.cms] in format[css]"){
        const textToSave = document.getElementById("area").value;
        const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
        const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
        const fileNameToSaveAs = "style.css";

        const downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);

        downloadLink.click();
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command 'save[text from panelcode.cms] in format[css]' is complite  ";

    }
    if (rd === "Command 'save[text from panelcode.cms] in format[js]"){
        const textToSave = document.getElementById("area").value;
        const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
        const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
        const fileNameToSaveAs = "script.js";

        const downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);

        downloadLink.click();
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command 'save[text from panelcode.cms] in format[js]' is complite  ";

    }
    if (rd === "get[inforamtion.cms]"){
        alert(navigator.userAgent)
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command 'get[inforamtion.cms]' is complite  ";
        cd.innerHTML = navigator.userAgent;

    }
    if (rd === "close"){
      location.href="index.html"

    }
    if (rd === "set[fullscreen]"){
        openFullscreen()
        let cd = document.getElementById('sdk')
        cd.innerHTML = "Command fullscreen is complite  ";

    }
    if (rd === "open[info]"){
        location.href="info.html"

    }

    if (rd === "open[web{github}]"){
        window.open('https://github.com/')

    }
    if (rd === "open[web{google}]"){
        window.open('https://google.com/')

    }
    if (rd === "open[web{apple}]"){
        window.open('https://apple.com/')

    }

}
function resetcons() {
    let cd = document.getElementById('sdk')
    cd.innerHTML = " ";

}
function savevantage() {
    const textToSave = document.getElementById("area").value;
    const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    const fileNameToSaveAs = "pack.vantage";

    const downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}