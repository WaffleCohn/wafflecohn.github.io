/**
  *
  * Enemy Classes
  *
  */

// Interface to model all enemy classes on
Enemy = function()
{
    this.direction; // direction moving: -1 or 1
    this.speed; // how fast it moves
    this.frame; // image to display
    this.width; // width of img
    this.height; // height of img
    this.rect; // rectangle for collision checks, location, and size
    this.kills = true; // kills player on collision

    this.update = function()
    {

    };
}

Swordsman = function(x)
{
    this.direction = "left";
    this.speed = 2;
    this.frame = "swordsman";
    this.width = 32 * scale;
    this.height = 24 * scale;
    this.rect = new Rectangle(x, lineHeight*13, lineHeight, lineHeight);
    this.kills = true;

    this.update = function()
    {
        this.rect.x -= this.speed;

        if (this.rect.x < -this.width)
            this.rect.x = canvas.width + this.width*2;

    };
}

Horseman = function(x)
{
    this.direction = "right";
    this.speed = 2.3;
    this.frame = "horseman1";
    this.width = 36 * scale;
    this.height = 28 * scale;
    this.rect = new Rectangle(x, lineHeight*12, lineHeight, lineHeight);
    this.kills = true;

    this.count = 0;

    this.frames = ["horseman1", "horseman2"];

    this.update = function()
    {
        this.count++;

        this.rect.x += this.speed;

        if (this.rect.x > canvas.width)
            this.rect.x = this.width * -3;

        if (this.count == 7)
        {
            this.count = 0;

            if (this.frame == this.frames[0])
                this.frame = this.frames[1];
            else
                this.frame = this.frames[0];
        }

    };
}

Chariot = function(x)
{
    this.direction = "left";
    this.speed = 2.8;
    this.frame = "chariot1";
    this.width = 56 * scale;
    this.height = 22 * scale;
    this.rect = new Rectangle(x, lineHeight*9, lineHeight, lineHeight);
    this.kills = true;

    this.count = 0;

    this.frames = ["chariot1", "chariot2"];

    this.update = function()
    {
        this.count++;

        this.rect.x -= this.speed;

        if (this.rect.x < -this.width)
            this.rect.x = canvas.width + this.width*2;

        if (this.count == 7)
        {
            this.count = 0;

            if (this.frame == this.frames[0])
                this.frame = this.frames[1];
            else
                this.frame = this.frames[0];
        }
    };
}

Spearman = function(x)
{
    this.direction = "left";
    this.speed = 2.5;
    this.frame = "spearman";
    this.width = 32 * scale;
    this.height = 20 * scale;
    this.rect = new Rectangle(x, lineHeight*11, lineHeight, lineHeight);
    this.kills = true;
    this.update = function()
    {
        this.rect.x -= this.speed;

        if (this.rect.x < -this.width)
            this.rect.x = canvas.width + this.width*2;

    };
}

// Change color with level
Archer = function(color)
{
    this.direction = "right";
    this.speed = 0;
    this.frame = "archer-" + color;
    this.width = 32 * scale;
    this.height = 28 * scale;
    this.rect = new Rectangle(0, lineHeight*10, lineHeight, lineHeight);
    this.kills = true;

    this.arrows = [new Arrow(color)];

    this.update = function()
    {
        for (var i=0; i < this.arrows.length; i++)
        {
            this.arrows[i].update(this.width);
            draw(this.arrows[i]);
        }
    };
}

Arrow = function(color)
{
    this.direction = "right";
    this.speed = 2.8;
    this.frame = "arrow-" + color;
    this.width = 30 * scale;
    this.height = 6 * scale;
    this.rect = new Rectangle(0, lineHeight*10, lineHeight, lineHeight);
    this.kills = true;

    this.update = function(minX)
    {
        this.rect.x += this.speed;

        if (this.rect.x > canvas.width + this.width)
            this.rect.x = minX;
    };
}

Snake = function()
{

}

Grogger = function()
{

}
