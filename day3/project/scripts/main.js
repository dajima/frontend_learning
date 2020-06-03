var myheader = document.querySelector('h1')
myheader.textContent = 'Hello world!';

var img = document.querySelector("img")
img.onclick = function (ev) {
    var attr = img.getAttribute("src")
    if (attr === "images/tree.jpg") {
        img.setAttribute("src", "images/driver.jpg")
    } else {
        img.setAttribute("src", "images/tree.jpg")
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName()
    } else {


        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}