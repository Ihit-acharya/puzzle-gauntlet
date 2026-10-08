let buttonD = document.getElementById("ans-btn");
let userInput;
let answer = "tyg12181";
function getInputAndValidateAnswer() {
  userInput = prompt("Enter your answer:");
  if (userInput === null) {
    alert("Cancelling wont help you get to the Next level");
  } else if (userInput.trim().toLocaleLowerCase() == answer) {
    alert("Wow, you did it. Tougher than you look huh!");
    window.location.href = "level2.html";
  } else {
    alert("You failed. Try again idiot");
  }
}

buttonD.addEventListener("click", getInputAndValidateAnswer);
