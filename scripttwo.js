let buttonD = document.querySelectorAll(".btn-container button");
let answerPattern = ["btn-blue","btn-green", "btn-red", "btn-violet" ];
let userPattern = [];

buttonD.forEach((btn) => {
  btn.addEventListener("click",() =>{
    let clickedButton = document.getElementById(btn.id);
    if(userPattern.length < 4 && !clickedButton.classList.contains("pressed") ){
    clickedButton.classList.add("pressed");
    userPattern.push(btn.id);

  };
    setTimeout(()=>{if(userPattern.length === 4){
      if(userPattern.join() === answerPattern.join()){
        alert("Wow, so Cool! You did it. You really are tough eh..");
        window.location.href = "level3.html";
      }
      else{
        alert("You suckk! Try again");
        userPattern = [];
        count = 0;
        location.reload();
      }}},150);
    }
  )
});

