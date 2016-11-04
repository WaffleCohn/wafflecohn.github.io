/**
  *
  * Main implementation
  *
  */

// CONSTANTS
var lineHeight = 40,
    scale = 1.25;

// CANVAS
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

// DOCUMENT ELEMENTS
var menuScreen = document.getElementById("menu"),
    gameOverScreen = document.getElementById("gameOver"),
    menuButtons = menuScreen.getElementsByTagName("button"),
    gameOverButtons = gameOverScreen.getElementsByTagName("button");

// Is Dead?
var isDead = false,
    death = null;

// SCORING AND TIME
var score = 0,
    highScore = localStorage.highScore ? localStorage.highScore : 0,
    level = 1,
    timer = new Timer(),
    isPaused = false,
    levelDisplay = new LevelDisplay();

// ASSET MANAGER
var manager = new AssetManager();

// DOWNLOAD IMAGES
var images = [
    "sand",
    "mordecai-normal", "mordecai-up-left", "mordecai-up-right", "mordecai-down-left", "mordecai-down-right",
    "esther-normal", "esther-up-left", "esther-up-right", "esther-down-left", "esther-down-right",
    "swordsman", "horseman1", "horseman2", "spearman", "archer-red", "arrow-red", "chariot1", "chariot2",
    "turtle1", "turtle2", "turtle3", "turtle4", "turtle5", "boat-right-small1", "boat-right-small2", "boat-right-medium1", "boat-right-medium2", "boat-right-large1", "boat-right-large2",
    "castle-full", "castle-full2", "castle-full3",
    "grogger",
    "death-crushed-1", "death-crushed-2", "death-crushed-3", "death-skull", "death-drowned-1", "death-drowned-2", "death-drowned-3",
    "star", "star2"
];

for (var i=0; i < images.length; i++)
    manager.queueDownload("img/" + images[i] + ".png");
/*
manager.queueDownload("img/sand.png");
manager.queueDownload("img/mordecai-normal.png");
manager.queueDownload("img/esther-normal.png");
manager.queueDownload("img/swordsman.png");
manager.queueDownload("img/horseman1.png");
*/

// GAME ELEMENTS
var player = new Player("mordecai", 250, lineHeight*14);

var elements = {
    enemies: [],
    background: [],
    transport: [],
    items: [],
    lives: []
};

// MAIN EXECUTION
manager.downloadAll(function() {

});

function start(character)
{
    player = new Player(character, 250, lineHeight*14);

    /*document.getElementById("menu").style.display = "none";
    var buttons = document.getElementsByTagName("button");
    for (var i=0; i < buttons.length; i++)
        buttons[i].disabled = true;
    canvas.style.display = "block";*/

    menuScreen.style.display = "none";
    canvas.style.display = "block";

    for (var i=0; i < menuButtons.length; i++)
        menuButtons[i].disabled = true;

    //for (var i=0; i < gameOverButtons.length; i++)
    //    gameOverButtons[i].disabled = false;

    // BACKGROUND
    elements.background.push(new Road());
    var waterPos = elements.background.length;
    elements.background.push(new Water());

    for (var i=0; i < 14; i++)
    {
        elements.background.push(new Sand(i*40, lineHeight*14));
        elements.background.push(new Sand(i*40, lineHeight*8));
    }

    for (var i=0; i < 5; i++)
        elements.background.push(new Castle(i));

    // ENEMIES
    elements.enemies.push(new Swordsman(canvas.width));
    elements.enemies.push(new Swordsman(canvas.width));
    elements.enemies.push(new Swordsman(canvas.width));
    elements.enemies[1].rect.x += elements.enemies[1].width*5;
    elements.enemies[2].rect.x += elements.enemies[2].width*10;
    elements.enemies.push(new Horseman(0));
    elements.enemies.push(new Horseman(0));
    elements.enemies.push(new Horseman(0));
    elements.enemies[4].rect.x -= elements.enemies[4].width*5;
    elements.enemies[5].rect.x -= elements.enemies[5].width*10;
    elements.enemies.push(new Spearman(canvas.width));
    elements.enemies.push(new Spearman(canvas.width));
    elements.enemies.push(new Spearman(canvas.width));
    elements.enemies[7].rect.x += elements.enemies[6].width*5;
    elements.enemies[8].rect.x += elements.enemies[7].width*10;
    elements.enemies.push(new Archer("red"));
    elements.enemies.push(new Chariot(canvas.width));
    elements.enemies.push(new Chariot(canvas.width));
    elements.enemies[10].rect.x += elements.enemies[10].width*5;

    // TRANSPORTATION
    elements.transport.push(new TurtleLine(false, false, 0));
    elements.transport.push(new TurtleLine(false, false, 1));
    elements.transport.push(new TurtleLine(false, false, 2));
    elements.transport.push(new TurtleLine(true, false, 3));
    elements.transport.push(new TurtleLine(false, true, 0));
    elements.transport.push(new TurtleLine(false, true, 1));
    elements.transport.push(new TurtleLine(false, true, 2));
    elements.transport.push(new TurtleLine(true, true, 3));
    elements.transport.push(new Boat("small", 0));
    elements.transport.push(new Boat("small", 1));
    elements.transport.push(new Boat("small", 2));
    elements.transport.push(new Boat("medium", 0));
    elements.transport.push(new Boat("medium", 1));
    elements.transport.push(new Boat("medium", 2));
    //elements.transport.push(new Boat("medium", 3));
    elements.transport.push(new Boat("large", 0));
    elements.transport.push(new Boat("large", 1));
    elements.transport.push(new Boat("large", 2));

    // LIVES
    for (var i=0; i < player.lives; i++)
        elements.lives.push(new Star(i));

    // KEY PRESS
    document.body.addEventListener("keydown", keyDown);

    function keyDown(e)
    {
        var keyCode = e.keyCode || event.keyCode;

        if (player.frame != "_blank_")
        {
            switch (keyCode)
            {
                case 37:
                    player.goLeft();
                    break;
                case 38:
                    player.goUp();
                    break;
                case 39:
                    player.goRight();
                    break;
                case 40:
                    player.goDown();
                    break;
                case 80:
                    if (isPaused)
                        resume();
                    else
                        pause();
                    break;
                default:
            }
        }
    }

    /*document.body.addEventListener("keyup", function(e) {
        //player.frame = player.normal;
    });*/

    // Drawing on the canvas
    var Draw = setInterval(function() {

        if (!isPaused)
        {
            // Clear Canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Alternating Black/White Lines
            /*for (var i=0; i < canvas.height / 40; i++)
            {
                var color = (i%2 == 0) ? new Color() : new Color(0,0,0,1);
                var rect = new Rectangle(0, i*40, canvas.width, 40, color);
                rect.Draw(ctx);
            }*/

            // Draw Background
            for (var i=0; i < elements.background.length; i++)
                draw(elements.background[i]);//elements.background[i].draw();

            // Draw Enemies
            for (var i=0; i < elements.enemies.length; i++)
                draw(elements.enemies[i]);//elements.enemies[i].draw();

            // Update Enemies
            for (var i=0; i < elements.enemies.length; i++)
                elements.enemies[i].update();

            // Draw/Update Transport
            for (var i=0; i < elements.transport.length; i++)
                elements.transport[i].update();

            // Draw Lives
            for (var i=0; i < elements.lives.length; i++)
                draw(elements.lives[i]);

            // Draw and Update Timer
            timer.update(33);
            draw(timer);

            var onTransport = false;

            // Move Player along with Transports
            for (var i=0; i < elements.transport.length; i++)
            {
                var el = elements.transport[i];

                if (el.kills == false)
                {
                    if (player.rect.Intersects(el.rect))
                    {
                        var dir = el.direction == "right" ? 1 : -1;

                        //player.rect.x += dir * el.speed;

                        if (el.direction == "right" && player.rect.x < canvas.width)
                            player.rect.x += el.speed;
                        else if (el.direction == "left" && player.rect.x + player.rect.width > 0)
                            player.rect.x -= el.speed;

                        onTransport = true;
                    }
                }
            }

            // Check for collision with enemy
            LOOP:for (var i=0; i < elements.enemies.length; i++)
            {
                var enemy = elements.enemies[i];

                if (player.rect.Intersects(enemy.rect))
                {
                    die("crushed");

                    break;
                }

                if (enemy.arrows != null)
                {
                    for (var j=0; j < enemy.arrows.length; j++)
                    {
                        if (player.rect.Intersects(enemy.arrows[j].rect))
                        {
                            die("crushed");

                            break LOOP;
                        }
                    }
                }
            }

            // Check for endzone
            var isEndZone = false;
            for (var i=0; i < elements.background.length; i++)
            {
                var el = elements.background[i];

                if (el.goal != null)
                {
                    if (player.rect.Intersects(el.goal.rect))
                    {
                        if (el.goal.kills)
                        {
                            die("crushed");
                            break;
                        }
                        else
                        {
                            isEndZone = true;

                            el.goal.turnOn();

                            goal();
                        }
                    }
                }
            }

            // Check if grogger is enabled and if all are completed
            var numGroggers = 0;

            for (var i=0; i < elements.background.length; i++)
            {
                var el = elements.background[i];

                if (el.goal != null)
                {
                    if (el.goal.show)
                    {
                        draw(el.goal);
                        numGroggers++;
                    }
                }
            }

            if (numGroggers == 5 && !levelDisplay.display)
            {
                score += 1000;

                nextLevel();
            }

            // Check for falling into water
            if (player.rect.Intersects(elements.background[waterPos].rect) && !onTransport && !isEndZone)
                die("drowned");

            // Check if in water area and off of screen
            if (player.rect.x > canvas.width || player.rect.x + player.rect.width < 0)
            {
                var water = elements.background[waterPos].rect;

                if (player.rect.y <= water.y + water.height && player.rect.y >= water.y)
                {
                    die("drowned");
                }
            }

            // Check if out of time
            if (timer.timeLeft == 0)
                die("crushed");

            // Draw Player
            if (!isDead)
            {
                draw(player);
            }
            else
            {
                draw(death);

                death.update();

                if (death.completed)
                {
                    isDead = false;
                    player.reset();
                    timer.reset();

                    if (player.lives == 0)
                    {
                        clearInterval(Draw);
                        document.body.removeEventListener("keydown", keyDown);
                        gameOver();
                    }
                }
            }

            // Write Score and highScore
            ctx.font = "20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Score", 50, 25);
            ctx.fillText(score, 50, 50);
            ctx.fillText("High-Score", canvas.width-150, 25);
            ctx.fillText(highScore, canvas.width-150, 50);

            // Write Lives and Time
            ctx.font = "25px Arial";
            ctx.fillStyle = "yellow";
            ctx.fillText("Lives", 5, canvas.height - 10);
            ctx.fillText("Time", canvas.width - 70, lineHeight * 16);

            // Display Level Up
            if (levelDisplay.display)
                levelDisplay.draw();

            if (levelDisplay.wasShown)
            {
                for (var i=0; i < elements.background.length; i++)
                {
                    var el = elements.background[i];

                    if (el.goal != null)
                    {
                        el.goal.turnOff();
                    }
                }

                levelDisplay.wasShown = false;

                player.reset();
            }
        }
    }, 33);
}

function pause()
{
    isPaused = true;
}

function resume()
{
    isPaused = false;
}

function die(type)
{
    if (!isDead)
    {
        timer.pause();

        death = new Death(player.rect.x, player.rect.y, type);
        player.frame = "_blank_";
        isDead = true;

        var alive = player.loseLife();

        //if (!alive)
        //    gameOver();

        elements.lives[player.lives].frame = "_blank_";
    }
}

function goal()
{
    player.reset();

    score += 50 + 10*(Math.floor(timer.timeLeft/1000));

    timer.reset();
}

function nextLevel()
{
    level++;

    levelDisplay.display = true;
    player.frame = "_blank_";

    numGroggers = 0;

    // Toggle color of archer
    // Make things faster
    // More arrows
}

function gameOver()
{
    //pause();
    //clearInterval(Draw);

    if (score > highScore)
    {
        highScore = score;

        if (typeof(Storage) !== "undefined")
            localStorage.setItem("highScore", highScore);
    }

    canvas.style.display = "none";
    gameOverScreen.style.display = "block";
    document.getElementById("score").innerHTML = score;

    for (var i=0; i < menuButtons.length; i++)
        menuButtons[i].disabled = false;
}

function restart()
{
    score = 0;
    for (var i in elements)
        elements[i] = [];

    canvas.style.display = "block";
    gameOverScreen.style.display = "none";

    for (var i=0; i < gameOverButtons.length; i++)
        gameOverButtons.disabled = true;

    //resume();
    start(player.normal.substring(0, player.normal.indexOf("-")));
}
