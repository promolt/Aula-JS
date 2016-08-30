var userChoice = prompt("Voce escolhe pedra, papel ou tesoura?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "pedra";
} else if(computerChoice <= 0.67) {
	computerChoice = "papel";
} else {
	computerChoice = "tesoura";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "O resultado e um empate";
}

else if(choice1 === "pedra") {

    if(choice2 === "tesoura") {
        return "pedra vence";
    }
    else {
        return "papel vence";
    }

}

else if (choice1 === "papel") {
    if (choice2 === "pedra") {
        return "papel vence"
    }
    else {
        return "tesoura vence"
    }
}


}; 