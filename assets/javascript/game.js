// create variables ////////////////////////////////

$( document ).ready(function() {
    console.log( "ready!" );


var rdmNum = 0;
var rCrystal = 0;
var bCrystal = 0;
var yCrystal = 0;
var gCrystal = 0;

// win and loss count
var totalScore = 0;
var winCount = 0;
var lossCount = 0;


// functions ////////////////////////////////

// randomly generate a number between 19-120 and display to user

$("#randomNum").load("load", function() {
	rdmNum = Math.floor((Math.random() * 102 + 19));     
	$("#randomNum").html("<h1>" + rdmNum + "</h1>")              
});


// Assign a random number between 1-12 to each crystal

$("#rrCrystal").load("load", function() {
	rCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rrCrystal").html("<h1>" + rCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

$("#bbCrystal").load("load", function() {
	bCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#bbCrystal").html("<h1>" + bCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

$("#yyCrystal").load("load", function() {
	yCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#yyCrystal").html("<h1>" + yCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

$("#ggCrystal").load("load", function() {
	gCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#ggCrystal").html("<h1>" + gCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

console.log(rCrystal);
console.log(bCrystal);
console.log(yCrystal);
console.log(gCrystal);


// upon clicking crystal, add value to total score counter 

// user clicks red crystal
$("#rCrystal").on("click", function() {

	// totalScore variable updates
	totalScore = totalScore + rCrystal;    

	// totalScore displayed to HTML
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  

    // reset function runs
    roundComplete();    
});


// blue crystal
$("#bCrystal").on("click", function() {
	totalScore = totalScore + bCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});


// yellow crystal
$("#yCrystal").on("click", function() {
	totalScore = totalScore + yCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});

// green crystal
$("#gCrystal").on("click", function() {
	totalScore = totalScore + gCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});



// roundComplete function
function roundComplete() {

	// player wins if total score = random number
	if (totalScore === rdmNum) {
		winCount++;
		$("#winCount").html(winCount);
		resetNums();

	// player loses if total score > random number
	} else if (totalScore > rdmNum) {
			lossCount++;
		$("#lossCount").html(lossCount);
		resetNums();
	}
}

// generates new random numbers, updates score counter, resets totalScore
function resetNums() {

	$("#randomNum").load("load", function() {
	rdmNum = Math.floor((Math.random() * 102 + 19));     
	$("#randomNum").html("<h1>" + rdmNum + "</h1>")              
});


// Assigns a random number between 1-12 to each crystal
$("#rCrystal").load("load", function() {
	rCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rCrystal").html("<h1>" + rCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

$("#bbCrystal").load("load", function() {
	bCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#bbCrystal").html("<h1>" + bCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

$("#yyCrystal").load("load", function() {
	yCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#yyCrystal").html("<h1>" + yCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

$("#ggCrystal").load("load", function() {
	gCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#ggCrystal").html("<h1>" + gCrystal + "</h1>");
    // $("#rdmRedbelow").hide();
});

console.log(rCrystal);
console.log(bCrystal);
console.log(yCrystal);
console.log(gCrystal);



}



// update win / loss counter

// reset random number 19-20

// reset crystal values


// main process ////////////////////////////////


// end document ready
});
