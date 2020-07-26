<?php

$difficulty = $_GET[difficultySelect];
$theme = $_GET[themeOptions];
$controls = $_GET[controlChoices];

$customThemeGuyColor = $_GET[personColor];
$customThemeBoulderColor = $_GET[boulderColor];
$customThemeBackgroundColor = $_GET[backgroundColor];

$personColor = "red";
$backgroundColor = "lightgray";
$boulderColor = "brown"; 

$leftArrowKeyFunction = "moveLeft();";
$rightArrowKeyFunction = "moveRight();";
$leftRightButtons = " ";

if ($controls == "buttons") {
	$leftRightButtons = '<button onclick="moveLeft();">

			Left

		</button>

		<button onclick="moveRight();">

			Right

		</button>';
	$leftArrowKeyFunction = "nothing();";
	$rightArrowKeyFunction = "nothing();";
}

if ($theme == "normal") {
	
	$personColor = "red";
	$backgroundColor = "lightgray";
	$boulderColor = "brown"; 
	
}elseif ($theme == "space") {
		
	$personColor = "red";
	$backgroundColor = "black";
	$boulderColor = "white"; 
	
}elseif ($theme == "ocean") {
		
	$personColor = "orange";
	$backgroundColor = "blue";
	$boulderColor = "black"; 
	
}elseif ($theme == "custom") {
	$personColor = $customThemeGuyColor;
	$backgroundColor = $customThemeBackgroundColor;
	$boulderColor = $customThemeBoulderColor;
}


/*
 * 
 * START OF HTML *
 * 
 */ 

print '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>

		<meta http-equiv="content-type" content="text/html;charset=utf-8" />

		<title>Falling Boulders Game</title>

		<style type = "text/css">
			td {

				width: 10px;
				height: 10px;
			}

		</style>
		
		

<!-- --------------START-OF-JAVASCRIPT---------------------------------------------------------------------------- -->
		
		<script type="text/javascript">
		
var bcolor = "';
print $backgroundColor;
print '";

var guyColor = "';
print $personColor;
print '";

var boulderColor = "';
print $boulderColor;
print '";

var difficulty = ';
print $difficulty;
print ';

var timeBetweenBoulders = 900;
var boulderamount = 15;
var myBoulders = new Array();
var score = 0;
var loseMessage = "GAME OVER! Your Score is ";
var loseScoreMessage = loseMessage + score;
var lost = false;
var bouldersFalling = 0;

var boulderArray = new Array();

function onPageLoad() {
	var cells = document.getElementsByTagName("td");
	for (var i = 0; i < cells.length; i++) {
		cells[i].style.backgroundColor = bcolor;
	}
	
	if (difficulty == 28) {
		
		timeBetweenBoulders = 800;
	}
	if (difficulty == 18) {
		
		timeBetweenBoulders = 700;
		boulderamount = 20;
	}
	if (difficulty == 17) {
		
		timeBetweenBoulders = 650;
		boulderamount = 19;
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
		changeCellColor(this.x, this.y, guyColor);
		changeCellColor(this.x - 2, this.y, guyColor);
		changeCellColor(this.x, this.y - 1, guyColor);
		changeCellColor(this.x - 2, this.y - 1, guyColor);
		changeCellColor(this.x - 1, this.y - 1, guyColor);
		changeCellColor(this.x - 1, this.y - 2, guyColor);
		changeCellColor(this.x - 1, this.y - 3, guyColor);
		changeCellColor(this.x - 2, this.y - 3, guyColor);
		changeCellColor(this.x - 2, this.y - 4, guyColor);
		changeCellColor(this.x - 2, this.y - 5, guyColor);
		changeCellColor(this.x - 1, this.y - 5, guyColor);
		changeCellColor(this.x, this.y - 5, guyColor);
		changeCellColor(this.x, this.y - 4, guyColor);
		changeCellColor(this.x, this.y - 3, guyColor);
	},
	erase : function() {
		changeCellColor(this.x, this.y, bcolor);
		changeCellColor(this.x - 2, this.y, bcolor);
		changeCellColor(this.x, this.y - 1, bcolor);
		changeCellColor(this.x - 2, this.y - 1, bcolor);
		changeCellColor(this.x - 1, this.y - 1, bcolor);
		changeCellColor(this.x - 1, this.y - 2, bcolor);
		changeCellColor(this.x - 1, this.y - 3, bcolor);
		changeCellColor(this.x - 2, this.y - 3, bcolor);
		changeCellColor(this.x - 2, this.y - 4, bcolor);
		changeCellColor(this.x - 2, this.y - 5, bcolor);
		changeCellColor(this.x - 1, this.y - 5, bcolor);
		changeCellColor(this.x, this.y - 5, bcolor);
		changeCellColor(this.x, this.y - 4, bcolor);
		changeCellColor(this.x, this.y - 3, bcolor);
	}
}

function boulder(bouldernumber) {
	this.x = Math.floor((Math.random() * 49));
	this.y = 0;
	this.draw = function() {
		changeCellColor(this.x, this.y, boulderColor);
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
	bouldersFalling = setInterval(function() {
		if (k < boulderamount) {
			makeFall(myBoulders[k]);
			k++;
		}
	}, timeBetweenBoulders);
}

function makeFall(bouldername) {
	setInterval(function() {
		fall(bouldername);
	}, difficulty);
}

function fall(bouldername) {
	if (bouldername) {
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
				lost = true;
				clearInterval(bouldersFalling);
				for (var j = 0; j < boulderamount; j++) {
					myBoulders[j] = null;
				}
				alert(loseScoreMessage);
			}
			document.location.reload(true);
		}
	}
}

function showScore() {
	document.getElementById("displayScore").innerHTML = "Score: " + score;
}

function nothing() {
}

//konami = new Konami();
//	konami.pattern = "3838404037393739666513";
	
function arrowKeys(e) {
	keyCode = e ? e.keyCode : event.keyCode;
	
	if (keyCode == 37) {
		';
		print $leftArrowKeyFunction;
		print'
	}
	
	if (keyCode == 39) {
		';
		print $rightArrowKeyFunction;
		print'
	}
	
	return !(keyCode == 37 || keyCode == 39);
}	

</script>
<!-- --------------END-OF-JAVASCRIPT---------------------------------------------------------------------------- -->


	</head>

	<body onload="onPageLoad()" onkeydown="return arrowKeys(event);">

		<p id="displayScore"></p>

		<table id="gameboard" border="0" cellpadding="0" cellspacing="0">

			<tr id="y0">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y1">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y2">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y3">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y4">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y5">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y6">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y7">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y8">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y9">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y10">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y11">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y12">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y13">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y14">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y15">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y16">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y17">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y18">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y19">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y20">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y21">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y22">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y23">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y24">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y25">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y26">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y27">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y28">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y29">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y30">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y31">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y32">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y33">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y34">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y35">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y36">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y37">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y38">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y39">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y40">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y41">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y42">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y43">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y44">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y45">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y46">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y47">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y48">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

			<tr id="y49">

				<td class="x0"></td>

				<td class="x1"></td>

				<td class="x2"></td>

				<td class="x3"></td>

				<td class="x4"></td>

				<td class="x5"></td>

				<td class="x6"></td>

				<td class="x7"></td>

				<td class="x8"></td>

				<td class="x9"></td>

				<td class="x10"></td>

				<td class="x11"></td>

				<td class="x12"></td>

				<td class="x13"></td>

				<td class="x14"></td>

				<td class="x15"></td>

				<td class="x16"></td>

				<td class="x17"></td>

				<td class="x18"></td>

				<td class="x19"></td>

				<td class="x20"></td>

				<td class="x21"></td>

				<td class="x22"></td>

				<td class="x23"></td>

				<td class="x24"></td>

				<td class="x25"></td>

				<td class="x26"></td>

				<td class="x27"></td>

				<td class="x28"></td>

				<td class="x29"></td>

				<td class="x30"></td>

				<td class="x31"></td>

				<td class="x32"></td>

				<td class="x33"></td>

				<td class="x34"></td>

				<td class="x35"></td>

				<td class="x36"></td>

				<td class="x37"></td>

				<td class="x38"></td>

				<td class="x39"></td>

				<td class="x40"></td>

				<td class="x41"></td>

				<td class="x42"></td>

				<td class="x43"></td>

				<td class="x44"></td>

				<td class="x45"></td>

				<td class="x46"></td>

				<td class="x47"></td>

				<td class="x48"></td>

				<td class="x49"></td>

			</tr>

		</table>

		';
		print $leftRightButtons;
		print '

		<button onclick="callfall();" id="startButton" >

			Start

		</button>

	</body>

</html>'

/*
 * 
 * END OF HTML *
 * 
 */ 

?>