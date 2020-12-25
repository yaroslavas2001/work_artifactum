var randomLoc = Math.floor(Math.random() * 5);
// вернет от 0 до 1(не включая 1)
// floor - округляет и отбрасывает дробную часть 
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;
// вариант исправления ошибки
var hits1;
var hits2;
var hits3;

while (isSunk == false){
    guess = prompt("Ready, aim, fire!(enter a number 0-6):");
    //prompt - функция для получения данных от пользователя(строка), как input в pithon;
    //если пользователь закрыл окно и ничего не ввел, вернет null - нет значения
    if (guess < 0 || guess > 6){
        // || - или && - и
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        //вариант исправления ошибки с попаданием
        if (guess == location1 || guess == location2 || guess == location3){
            if (guess == location1){
                hits1=true;
                alert ("HIT!");
            }
            if (guess == location2){
                hits2=true;
                alert ("HIT!");
            }
            if (guess == location3){
                hits3=true;
                alert ("HIT!");
            }
            if(hits1 && hits2 && hits3){
                isSunk = true;
                alert("You sank my battleship!");
            }
        }else{
            alert("MISS");
            }
        // if (guess == location1 || guess == location2 || guess == location3){
        //     hits = hits + 1;
        //     alert ("HIT!");
        //     if (hits == 3) {
        //         isSunk = true;
        //         alert("You sank my battleship!");
        //     }
        // } 
        // else{
        //     alert("MISS");
        // }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);