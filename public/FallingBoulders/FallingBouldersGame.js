var bcolor = "lightgrey";
var boulderamount = 15;
var myBoulders = new Array();
var score = 0;
var loseMessage = "GAME OVER! Your Score is ";
var loseScoreMessage = loseMessage + score;
var lost = false;

var boulderArray = new Array();

function onPageLoad() {
	// When window loads, changes all cell background colors to correct bcolor
	// Exists so that bcolor can be changed in JavaScript file
	var cells = document.getElementsByTagName("td");
	for (var i = 0; i < cells.length; i++) {
		cells[i].style.backgroundColor = bcolor;
	}

	guy.draw();
	showScore();
	for (var j = 0; j < boulderamount; j++) {
		myBoulders[j] = new boulder(j);
	}
}

var guy = {
	x : 25,
	y : 49,
	max_X : 49,
	min_X : 2,
	hitbox : {
		min : {
			x : 23,
			y : 44
		},
		max : {
			x : 25,
			y : 49
		}
	},
	draw : function() {
		changeCellColor(this.x, this.y, "red");
		// 25, 49
		changeCellColor(this.x - 2, this.y, "red");
		// 23, 49
		changeCellColor(this.x, this.y - 1, "red");
		// 25, 48
		changeCellColor(this.x - 2, this.y - 1, "red");
		// 23, 48
		changeCellColor(this.x - 1, this.y - 1, "red");
		// 24, 48
		changeCellColor(this.x - 1, this.y - 2, "red");
		// 24, 47
		changeCellColor(this.x - 1, this.y - 3, "red");
		// 24, 46
		changeCellColor(this.x - 2, this.y - 3, "red");
		// 23, 46
		changeCellColor(this.x - 2, this.y - 4, "red");
		// 23, 45
		changeCellColor(this.x - 2, this.y - 5, "red");
		// 23, 44
		changeCellColor(this.x - 1, this.y - 5, "red");
		// 24, 44
		changeCellColor(this.x, this.y - 5, "red");
		// 25, 44
		changeCellColor(this.x, this.y - 4, "red");
		// 25, 45
		changeCellColor(this.x, this.y - 3, "red");
		// 25, 46
	},
	erase : function() {
		changeCellColor(this.x, this.y, bcolor);
		// 25, 49
		changeCellColor(this.x - 2, this.y, bcolor);
		// 23, 49
		changeCellColor(this.x, this.y - 1, bcolor);
		// 25, 48
		changeCellColor(this.x - 2, this.y - 1, bcolor);
		// 23, 48
		changeCellColor(this.x - 1, this.y - 1, bcolor);
		// 24, 48
		changeCellColor(this.x - 1, this.y - 2, bcolor);
		// 24, 47
		changeCellColor(this.x - 1, this.y - 3, bcolor);
		// 24, 46
		changeCellColor(this.x - 2, this.y - 3, bcolor);
		// 23, 46
		changeCellColor(this.x - 2, this.y - 4, bcolor);
		// 23, 45
		changeCellColor(this.x - 2, this.y - 5, bcolor);
		// 23, 44
		changeCellColor(this.x - 1, this.y - 5, bcolor);
		// 24, 44
		changeCellColor(this.x, this.y - 5, bcolor);
		// 25, 44
		changeCellColor(this.x, this.y - 4, bcolor);
		// 25, 45
		changeCellColor(this.x, this.y - 3, bcolor);
		// 25, 46
	}
}

function updateBoulderArray() {
	boulderArray[0] = new Array();
	X[0] = new Array(bouldername.x);
	Y[1] = new Array(bouldername.y);
}

function boulder(bouldernumber) {
	this.x = Math.floor((Math.random() * 49));
	this.y = 0;
	this.draw = function() {
		changeCellColor(this.x, this.y, "brown");
	};
	this.erase = function() {
		changeCellColor(this.x, this.y, bcolor);
	};
}

function moveRight() {
	guy.erase();
	if (guy.x < guy.max_X) {
		guy.x++;
		guy.hitbox.min.x++;
		guy.hitbox.max.x++;
	}
	guy.draw();
	updateBodyArray()
}

function moveLeft() {
	guy.erase();
	if (guy.x > guy.min_X) {
		guy.x--;
		guy.hitbox.min.x--;
		guy.hitbox.max.x--;
	}
	guy.draw();

}

function callfall() {
	document.getElementById("startButton").onclick = nothing();
	var k = 0;
	setInterval(function() {
		if (k < boulderamount) {
			makeFall(myBoulders[k]);
			k++;
		}
	}, 900);
}

function makeFall(bouldername) {
	setInterval(function() {
		fall(bouldername);
	}, 40);
}

function fall(bouldername) {
	bouldername.erase();
	if (bouldername.y < 49) {
		bouldername.y++;
	} else {
		bouldername.y = 0;
		bouldername.x = Math.floor((Math.random() * 49));
		score++;
		showScore();
		loseScoreMessage = loseMessage + score;
	}
	bouldername.draw();
	hitCheck();
}

function changeCellColor(x, y, color) {
	var yCoord = "y" + y;
	var xCoord = "x" + x;
	var elements = document.getElementById(yCoord).getElementsByClassName(xCoord);
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = color;
	}
}

function hitCheck() {
	for (var h = 0; h < boulderamount; h++) {
		if (myBoulders[h].x >= guy.hitbox.min.x && myBoulders[h].x <= guy.hitbox.max.x && myBoulders[h].y >= guy.hitbox.min.y && myBoulders[h].y <= guy.hitbox.max.y) {

			if (lost == false) {
				alert(loseScoreMessage);
				lost = true;
			}
			document.location.reload(true);
		}
	}
}

function showScore() {
	document.getElementById("displayScore").innerHTML = "Score: " + score;
}

function nothing() {
	/*this stops the start button from causing the boulders to fall faster when the button is repeaditly pressed*/
}

function getHarder() {
	boulderamount++;
}

function arrowMove() {
	
}

/*For Debugging the Boulder Array:
 function boulderArrayPrint() {
 document.getElementById("boulderthingy").innerHTML = boulderamount;//myBoulders;
 }
 */