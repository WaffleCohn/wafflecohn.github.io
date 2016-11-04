/**
  *
  * Background elements
  *
  */

Road = function()
{
    //this.rect = new Rectangle(0, lineHeight*8, canvas.width, lineHeight*8 + 20, new Color(70, 70, 70));//new Color(100, 220, 0, 1)); // with color
    this.rect = new Rectangle(0, 0, canvas.width, canvas.height, new Color(70, 70, 70));
    this.kills = false;

    this.draw = function()
    {
        this.rect.Draw(ctx);
    };
};

// possibly: make large water under every transport with little squares for winning spots
Water = function(isEnd)
{
    this.rect = new Rectangle(0, lineHeight*2, canvas.width, lineHeight*6, new Color(0, 0, 71));//new Color(45, 1, 175, 1)); // with color
    this.kills = !isEnd;
    this.end = isEnd;

    this.draw = function()
    {
        this.rect.Draw(ctx);
    };
};

Sand = function(x, y)
{
    this.rect = new Rectangle(x, y, lineHeight, lineHeight);
    this.frame = "sand";
    this.kills = false;

    this.width = lineHeight;
    this.height = lineHeight;

    this.draw = function()
    {
        ctx.drawImage(manager.getAsset(this.frame), this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
};

Stone = function(path)
{
    this.rect = new Rectangle();
    this.frame = path; // different grass pieces
    this.kills = true; // may have to check if path is top piece or not
};

Castle = function(n)
{
    this.width = 94 * scale;
    this.height = 46 * scale;
    this.rect = new Rectangle(n * this.width, (lineHeight*3 - this.height), this.width, this.height);
    this.frame = "castle-full3";
    this.kills = true;

    //this.goal = new Rectangle(n * this.width + 14 * scale, this.rect.y + 14*scale, 35 * scale, this.height - 14*scale);//, new Color(255, 255, 255, 1));
    this.goal = new Grogger(n * this.width + 14 * scale, this.rect.y + 14*scale, 35 * scale, this.height - 14*scale);
};

Grogger = function(x, y, w, h)
{
    this.rect = new Rectangle(x, y, w, h);
    this.kills = false; // true if set
    this.show = false;
    this.frame = "grogger";
    this.width = 34 * scale;
    this.height = 30 * scale;

    this.turnOn = function()
    {
        this.kills = true;
        this.show = true;
    };

    this.turnOff = function()
    {
        this.kills = false;
        this.show = false;
    };
};

Timer = function()
{
    this.rect = new Rectangle(canvas.width - 200 - 80, lineHeight * 15.5, 200, 20, new Color(0, 175, 0));
    this.startX = this.rect.x;
    this.startWidth = this.rect.width;
    this.startColor = this.rect.color;

    this.timeLeft = 50 * 1000; // seconds * 1000 ms
    this.originalTime = this.timeLeft;

    this.paused = false;

    this.update = function(t)
    {
        if (!this.paused)
        {
            this.timeLeft = Math.max(this.timeLeft - t, 0);

            if (this.timeLeft <= 10 * 1000)
                this.rect.color = new Color(175, 0, 0);

            this.rect.width -= t / 1000 * 4;
            this.rect.x += t / 1000 * 4;
        }
    };

    this.pause = function()
    {
        this.paused = true;
    };

    this.reset = function()
    {
        this.paused = false;
        this.timeLeft = this.originalTime;

        this.rect.x = this.startX;
        this.rect.width = this.startWidth;
        this.rect.color = this.startColor;
    }
};

LevelDisplay = function()
{
    this.width = 200;
    this.height = 50;
    this.rect = new Rectangle((canvas.width - this.width) / 2, (canvas.height - this.height) / 2, this.width, this.height, new Color(0, 0, 0, 1));

    this.display = false;
    this.wasShown = false;

    this.count = 0;

    this.draw = function()
    {
        this.count++;

        this.rect.Draw(ctx);
        ctx.font = "30px Arial";
        ctx.fillStyle = "rgba(255, 255, 0, " + this.rect.color.a + ")";
        ctx.fillText("Level Up", this.rect.x + (this.width - 120)/2, this.rect.y + (this.height - 21.33)/2 + 21.33);

        if (this.count > 20)
            this.rect.color.a = Math.max(this.rect.color.a - 0.02, 0);

        if (this.rect.color.a == 0)
            this.reset();
    };

    this.reset = function()
    {
        this.rect.color.a = 1;

        this.count = 0;

        this.display = false;
        this.wasShown = true;
    };
};

PausedText = function()
{

};
