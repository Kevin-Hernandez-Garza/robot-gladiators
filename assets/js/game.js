// Game States
//  "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// created an array with multiple enemy-robot names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    //    reapeat and execute as lng as the enemy-robot us alive 
    while (playerHealth > 0 && enemyHealth > 0) {
        if (playerHealth > 0) {
            alert("Welcome to Robot Gladiators!");
        }

        var promptFight = window.prompt("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning 
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove players's health by subtracting the amount set in the enemyAttack variable 
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " stil has " + playerHealth + " health left.");
        }
    }
};

// looping through an array
for (var i = 0; i < enemyNames.length; i++) {
    // letting the player know what round they are in, since the array starts at 0 then we have to add 1 to it
    if (playerHealth > 0) {
        alert("Welcome to Robot Gladiators! Round " + (i + 1));
    } else {
        alert("You have lost your robot in battle! Game Over!");
    }
    // here it's picking a new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    // here we reset the enemyHealth back to 50 before starting a new fight
    enemyHealth = 50;
    // use a debugger to pause the script from running and check what's going on at the moment 
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}
