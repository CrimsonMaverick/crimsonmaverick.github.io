// const myHeading = document.querySelector('h3');
// myHeading.textContent = 'Get a load of this';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-3.png') {
      myImage.setAttribute('src','image-4.png');
    } else {
      myImage.setAttribute('src','image-3.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setPatreoname () {
    let myName = prompt ('please enter your name here.');
    if (!myName) {
        setPatreoname ();
    } else {
        localStorage.setItem ('name',myName);
        myHeading.textContent = 'Maverick is cool,' + myName; 
    }
}

if (!localStorage.getItem('name')) {
    setPatreoname();
} else {
    let storedname = localStorage.getItem ('name');
    myHeading.textcontent = 'Maverick is cool,' + storedname;
}

myButton.onclick = function() {
    setPatreoname();
}