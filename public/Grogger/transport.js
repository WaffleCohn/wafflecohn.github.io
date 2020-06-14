/**
  *
  * Transportation classes
  *
  */

// Interface to model all transportation classes on
Transportation = function()
{
    this.components = []; // contains pieces of transportation
    this.rect; // rectangle for whole object
    this.direction; // direction of movement - "right" or "left"
    this.speed; // speed of movement

    var sampleComponent = {
        rect: new Rectangle(), // rectangle for inner piece
        kills: false, // may be true for some
        frame: "image.png", // image file to display
        width: 0, // width of img
        height: 0 // height of img
    };

    this.components.push(sampleComponent); // add pieces to components array

    this.update = function()
    {

    };
};

Boat = function(size, n)
{
    this.rect;
    this.direction = "right";
    this.speed;
    this.width;
    this.height = 16 * scale;

    this.frames = [];
    this.frames.push("boat-right-" + size + "1");
    this.frames.push("boat-right-" + size + "2");
    this.frame = frames[0];

    this.kills = false;

    this.components = [];

    if (size == "small")
    {
        this.width = 84 * scale;
        this.rect = new Rectangle(-this.width * 2 * n, lineHeight * 6, 84 * scale, lineHeight);
        this.speed = 2.7;
        this.dist = 2;
    }
    else if (size == "medium")
    {
        this.width = 109 * scale;
        this.rect = new Rectangle(-this.width * 1.75 * n, lineHeight * 3, 109 * scale, lineHeight);
        this.speed = 2.8;
    }
    else
    {
        this.width = 156 * scale;
        this.rect = new Rectangle(-this.width * 1.5 * n, lineHeight * 5, 156 * scale, lineHeight);
        this.speed = 3.3;
    }

    this.count = 0;

    this.update = function()
    {
        this.count++;

        var wait = (size == "small" || size == "medium") ? ((size == "small") ? 25 : 24) : 20;

        if (this.count == wait)
        {
            if (this.frame == this.frames[0])
                this.frame = this.frames[1];
            else
                this.frame = this.frames[0];

            this.count = 0;
        }

        this.rect.x += this.speed;

        if (this.rect.x > canvas.width)
            if (size == "small")
                this.rect.x = -this.width;
            else if (size == "medium")
                this.rect.x = -this.width * 1.25;
            else
                this.rect.x = -this.width * 1.5;

        draw(this);
    };
};

TurtleLine = function(sinking, top, n)
{
    this.components = [];
    var len = top ? 2 : 3;
    this.rect = new Rectangle(canvas.width + (n * (100 + (40 * len))), lineHeight * (top ? 4 : 7), 40 * len, lineHeight);
    this.direction = "left";
    this.speed = top ? 3.2 : 2.8;

    this.components.push(new Turtle(sinking));
    this.components.push(new Turtle(sinking));

    this.count = 0;

    this.kills = false;

    if (!top)
        this.components.push(new Turtle(sinking));

    for (var i=0; i < this.components.length; i++)
    {
        this.components[i].frame.rect.x = this.rect.x + (this.components[i].frame.rect.width * i);
        this.components[i].frame.rect.y = this.rect.y;
    }

    this.update = function()
    {
        this.count++;

        if (this.count == 20)
        {
            this.count = 0;
            for (var i=0; i < this.components.length; i++)
                this.components[i].nextFrame();
        }

        this.kills = this.components[0].frame.kills;

        this.rect.x -= this.speed;

        if (this.rect.x < -this.rect.width)
        {
            this.rect.x += 4 * (100 + this.rect.width);
            for (var i=0; i < this.components.length; i++)
                this.components[i].rect.x += 4 * (100 + this.rect.width);
        }

        for (var i=0; i < this.components.length; i++)
        {
            this.components[i].frame.rect.x -= this.speed; //= this.rect.x + (this.components[i].rect.width * i);
            draw(this.components[i].frame);
        }
    };
};

Turtle = function(sinking)
{
    this.frames = [];
    this.rect = new Rectangle(0, 0, 40, lineHeight);
    this.frames.push({
        rect: this.rect,
        kills: false,
        frame: "turtle1",
        width: 24 * scale,
        height: 18 * scale
    });
    this.frames.push({
        rect: this.rect,
        kills: false,
        frame: "turtle2",
        width: 28 * scale,
        height: 22 * scale
    });

    if (!sinking)
    {
        this.frames.push({
            rect: this.rect,
            kills: false,
            frame: "turtle3",
            width: 28 * scale,
            height: 22 * scale
        });
    }

    if (sinking)
    {
        this.frames.push({
            rect: this.rect,
            kills: false,
            frame: "turtle4",
            width: 20 * scale,
            height: 20 * scale
        });
        this.frames.push({
            rect: this.rect,
            kills: false,
            frame: "turtle5",
            width: 28 * scale,
            height: 26 * scale
        });
        this.frames.push({
            rect: this.rect,
            kills: true,
            frame: "_blank_",
            width: lineHeight,
            height: lineHeight
        });
    }

    this.frame = this.frames[0];
    this.frameNbr = 0;
    this.nextFrame = function()
    {
        this.frameNbr = ++this.frameNbr % this.frames.length;
        this.frame = this.frames[this.frameNbr];
    };
};

Alligator = function()
{

};
