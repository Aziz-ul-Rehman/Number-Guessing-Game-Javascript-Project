// We have to confirm that the users want to play game or not so we use confirm
// store confirm in a variable so we can make if else condition with the help of variable  
let userConcent=confirm(" Welcome to 'Guess a number' game. Click on ok to continue");
if(userConcent){
//Logic of the game
//Let give  number to computer number that is random
// I am using two functions math.random for generating number between 0.1 to 0.99 so we can get random value between 1 and 10 by multyplying math.random with 10
// For finding precised value i use math.ceal it converts point values to simple values
let computerNumber=  Math.ceil(Math.random()*10);
let counter=0;
// We are making condition that you can play game for only three times
while(counter<3){
    let userGuessed= prompt("Enter a specific number");
if(userGuessed==computerNumber){
    alert("Wohoo! You guessed the correct number"); 
    break
    
}


else{
    alert("Try Again ");
}
counter+=1;

}
if(counter==3){
    alert ("You have reached limits")
}
//If you want to play the game we restart it again
let restartOrnot=confirm("Do you want to play again");
if (restartOrnot){
    // For page reload and the game is started working again
location.reload()
}
else{
    alert("Okay some time later")
}

}
else{
    alert("Okay! May be some other time");
}