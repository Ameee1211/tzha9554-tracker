// User Input & Check Section:
var gameNameInput = document.querySelector(".gameName input");
var playtimeInput = document.querySelector(".playtime input");
var categorySelect = document.getElementById("selectCategory");
var enterErrorMessage = document.getElementById("enterErrorMessage");
var gameNameOutput = document.getElementById("gameNameOutput");
var categoryOutput = document.getElementById("categoryOutput");
var playtimeOutput = document.getElementById("playtimeOutput");
var totalPlaytimeOutput = document.getElementById("totalPlaytimeOutput");
var dateOutput = document.getElementById("dateOutput");
var checkErrorMessage = document.getElementById("checkErrorMessage");

var checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", checkGameInformation);
function checkGameInformation() {
    var playtimeValue = playtimeInput.value.trim();
    var regex = /^\d+(\.\d{1})?$/;

    // check if all input boxes and selection boxes are not blank or default options
    if (gameNameInput.value.trim() === "" && playtimeInput.value.trim() === "" && categorySelect.value === "Click to select") {
        gameNameInput.style.borderColor = "red";
        playtimeInput.style.borderColor = "red";
        categorySelect.style.borderColor = "red";
        enterErrorMessage.textContent = "Please enter the game information.";
    }
    // check if the game name is not blank
    else if (gameNameInput.value.trim() === "") {
        gameNameInput.style.borderColor = "red";
        enterErrorMessage.textContent = "Please enter the Game Name.";
    }
    // check if playtime is not blank
    else if (playtimeInput.value.trim() === "") {
        playtimeInput.style.borderColor = "red";
        enterErrorMessage.textContent = "Please enter the Playtime.";
    }
    // check if the playtimeInput contains only one decimal digit
    else if (!regex.test(playtimeValue)) {
        playtimeInput.style.borderColor = "red";
        enterErrorMessage.textContent = "Please enter a numeric value with one decimal place.";
    }
    // check if the category is not the default option
    else if (categorySelect.value === "Click to select") {
        categorySelect.style.borderColor = "red";
        enterErrorMessage.textContent = "Please select the Category.";
    }
    // if all info are correct, the card will be filled with user inputs
    else {
        // remove the error message
        enterErrorMessage.textContent = "";
        // change the border to black
        gameNameInput.style.borderColor = "black";
        playtimeInput.style.borderColor = "black";
        categorySelect.style.borderColor = "black";

        gameNameOutput.textContent = gameNameInput.value.trim();
        categoryOutput.textContent = categorySelect.value;
        playtimeOutput.textContent = playtimeInput.value.trim() + " Hours";
        // check if the game has been added in the local storage(gameHistory)
        let gameHistory = JSON.parse(localStorage.getItem('gameHistory'));
        if (gameHistory == null) {
            // if no game has been added, totalPlaytime = playtime
            totalPlaytimeOutput.textContent = playtimeInput.value.trim() + " Hours";}
            // if not added(a new game), totalPlaytime = playtime

            // if added, totalPlaytime = playtime + totalPlaytime(localStorage)

        // } else {
        // // Check to see if country exists in localStorage
        // if (gameHistory.find(element => element === gameNameOutput.textContent)) {
            
        // } else {
            
        // }
        // }
        // localStorage.setItem('favCountries', JSON.stringify(favCountries))
        
        
        dateOutput.textContent = getCurrentDate();
        // change the text color to black
        gameNameOutput.style.color = "black";
        categoryOutput.style.color = "black";
        playtimeOutput.style.color = "black";
        totalPlaytimeOutput.style.color = "black";
        dateOutput.style.color = "black";
    }
    function getCurrentDate() {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = 1 + currentDate.getMonth(); 
        var day = currentDate.getDate();
        var formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }
}




// clear all game info by clicking clear button
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearGameInformation);
function clearGameInformation() {
    var gameNameInput = document.querySelector(".gameName input");
    var playtimeInput = document.querySelector(".playtime input");
    var categorySelect = document.getElementById("selectCategory");
    var enterErrorMessage = document.getElementById("enterErrorMessage");
    // change the input value and select value to empty and default.
    gameNameInput.value = "";
    playtimeInput.value = "";
    categorySelect.value = "Click to select";
    // remove the error message
    enterErrorMessage.textContent = "";
    // change the border to black
    gameNameInput.style.borderColor = "black";
    playtimeInput.style.borderColor = "black";
    categorySelect.style.borderColor = "black";
}

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", (addGameHis)) ;
function addGameHis(){
    if (gameNameOutput.textContent.trim() === "NA"){
        //var checkErrorMessage = document.getElementById("checkErrorMessage");
        checkErrorMessage.textContent = "CANNOT be added to game history. Please finish step 1 first.";
    } else {
        var gameHis = document.getElementById("haha");
        gameHis.textContent = gameNameOutput.textContent;
    }

    
}




// if user clicks other part in web, error message gone
document.addEventListener("click", function (event) {
    var target = event.target;
    var userEnter = document.querySelector(".userEnter");
    var userAdd = document.querySelector(".userAdd");
    // if not userEnter section
    if (!userEnter.contains(target)) {
       var inputs = document.querySelectorAll(".userEnter input");
       var select = document.getElementById("selectCategory");
       inputs.forEach(function (input) {
           input.style.borderColor = "black";
       });
       select.style.borderColor = "black";
       enterErrorMessage.textContent = "";
    }
    // if not userAdd section
    if (!userAdd.contains(target)) {
       checkErrorMessage.textContent = "";
    }
});




















  

