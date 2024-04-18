// Shows that the files are all Connected:
console.log("Connected...Running...");

// Function to roll the Dice:
function rollDice() {

    // Declaration of Variables:
    let image = document.createElement("img");
    image.setAttribute("id", "diceImage");
    let wrapping = document.querySelector(".wrapping");
    let src;
    const diceFolders = document.querySelector(".diceOptions select");
    const diceFolder = diceFolders.value;
    console.log("Selected Dice type is: " + diceFolder);
    let j;
    
    // d4 is rolled:
    if (diceFolder === "d4")
    {
        j = Math.floor(Math.random() * 5);

        src = "dice/"+diceFolder+"/"+diceFolder+"-"+j+".png";
    }

    // d6 is rolled:
    if (diceFolder === "d6")
    {
        j = Math.floor(Math.random() * 7);

        src = "dice/"+diceFolder+"/"+diceFolder+"-"+j+".png";
    }

    // d8 is rolled:
    if (diceFolder === "d8")
    {
        j = Math.floor(Math.random() * 9);

        src = "dice/"+diceFolder+"/"+diceFolder+"-"+j+".png";
    }

    // d10 is rolled:
    if (diceFolder === "d10")
    {
        j = Math.floor(Math.random() * 11);

        src = "dice/"+diceFolder+"/"+diceFolder+"-"+j+".png";
    }

    // d12 is rolled:
    if (diceFolder === "d12")
    {
        j = Math.floor(Math.random() * 13);

        src = "dice/"+diceFolder+"/"+diceFolder+"-"+j+".png";
    }

    // d20 is rolled:
    if (diceFolder === "d20")
    {
        j = Math.floor(Math.random() * 21);

        src = "dice/"+diceFolder+"/"+diceFolder+"-"+j+".png";
    }

    // Error Handling for the event of J = 0: 
    if (j === 0)
    {
        alert("Invalid number...rolling again...");
    }

    image.setAttribute("src", src);
    wrapping.appendChild(image);
    document.body.appendChild(wrapping);
    console.log(src);
    console.log(" ");
}

// Function to Create, Roll and Display multiple Dice based on User's Number Input:
function rollManyDice() {

    //Declaration of Variables: 
    const diceAmount = document.getElementById("numberInput").value;
    console.log("User wants to roll: " + diceAmount + " dice.");

    for (let k = 0; k < diceAmount; k++) {
        rollDice(k);
    }


}