var answer = Math.floor(Math.random() * 100);
function result()
{
  var input = document.getElementById("userInput").value;
  while (input != answer)
  {
    if(input < answer) {
      var input = prompt("You guessed too low. Guess again");
    } else if(input > answer) {
      var input = prompt("You guessed too high. Guess again");
    } else {
      alert("Congratulations you guessed correct!");
    };
  }
  alert("Congratulations you guessed correct!");
}
