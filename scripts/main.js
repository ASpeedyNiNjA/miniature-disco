//Image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/grid.png") {
    myImage.setAttribute("src", "images/logo2.jpeg");
  } else {
    myImage.setAttribute("src", "images/grid.png");
  }
};
//Personalized Welcome Message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Play Pac-Man, ${myName}`;
    }
  }  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Play Pac-Man, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
  