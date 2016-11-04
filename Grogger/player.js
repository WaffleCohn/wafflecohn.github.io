/**
  *
  * Player Class
  *
  */

Player = function(char, x, y)
{
	//this.rect = new Rectangle(x+1, y+1, lineHeight-2, lineHeight-2); //30, 32.5);
	this.maxY = y;
	this.character = char;
	this.direction = "normal"; // up, down, left, right
	this.vertDir = "up";
	this.horizDir = "left";
	this.speed = lineHeight;

	this.width = 24 * scale;
	this.height = 26 * scale;

	this.rect = new Rectangle(x + (lineHeight - this.width)/2, y + (lineHeight - this.height)/2, this.width, this.height);
	this.origin = new Point(this.rect.x, this.rect.y);
	this.highestPos = 14;

	this.normal = char + "-normal";
	this.upL = char + "-up-left";
	this.upR = char + "-up-right";
	this.downL = char + "-down-left";
	this.downR = char + "-down-right";

	this.deathFrames = ["death1", "death2", "death3", "death4", "death5", "death6", "death7"];

	this.frame = this.normal;

	this.lives = 3;

	// change position and frame with movement functions

	this.goLeft = function()
	{
		if (this.rect.x + this.rect.width > 0)
			this.rect.x -= this.speed;

		if (this.vertDir == "up")
			this.frame = this.upL;
		else if (this.vertDir == "down")
			this.frame = this.downL;

		this.direction = "left";
		this.horizDir = "left";
	};

	this.goRight = function()
	{
		if (this.rect.x < canvas.width)
			this.rect.x += this.speed;

		if (this.vertDir == "up")
			this.frame = this.upR;
		else if (this.vertDir == "down")
			this.frame = this.downR;

		this.direction = "right";
		this.horizDir = "right";
	};

	this.goUp = function()
	{
		this.rect.y -= this.speed;

		if (this.horizDir == "left")
			this.frame = this.upL;
		else if (this.horizDir == "right")
			this.frame = this.upR;

		this.direction = "up";
		this.vertDir = "up";

		if (this.rect.y / lineHeight < this.highestPos)
		{
			this.highestPos--;
			score += 10;
		}
	};

	this.goDown = function()
	{
		if (this.rect.y < this.maxY)
			this.rect.y += this.speed;

		if (this.horizDir == "left")
			this.frame = this.downL;
		else if (this.horizDir == "right")
			this.frame = this.downR;

		this.direction = "down";
		this.vertDir = "down";
	};

	/*this.update = function()
	{
		switch (this.direction) {
			case "left":
				this.goLeft();
				break;
			case "right":
				this.goRight();
				break;
			case "up":
				this.goUp();
				break;
			case "down":
				this.goDown();
				break;
			default:
		}
	};*/

	this.draw = function()
	{
		var w = 30,
			h = 32.5,
			x = Math.abs(this.rect.width - w) / 2 + this.rect.x,
		 	y = Math.abs(this.rect.height - h) / 2 + this.rect.y;

		ctx.drawImage(manager.getAsset(this.frame), x, y, w, h);
		//draw(this);
	};

	this.reset = function()
	{
		this.rect.x = this.origin.x;
		this.rect.y = this.origin.y;

		this.direction = "normal";
		this.vertDir = "up";
		this.horizDir = "left";

		this.frame = this.normal;

		this.highestPos = 14;
	};

	this.loseLife = function()
	{
		this.lives--;

		return this.lives > 0;
	};
};

Death = function(x, y, type)
{
	this.rect = new Rectangle(x, y, 32*scale, 32*scale);
	this.frame;
	this.width;
	this.height;

	this.frames = [];
	this.widths = [];
	this.heights = [];

	if (type == "crushed")
	{
		this.frames.push("death-crushed-1");
		this.widths.push(24*scale);
		this.heights.push(28*scale);

		this.frames.push("death-crushed-2");
		this.widths.push(28*scale);
		this.heights.push(26*scale);

		this.frames.push("death-crushed-3");
		this.widths.push(32*scale);
		this.heights.push(32*scale);
	}
	else
	{
		this.frames.push("death-drowned-1");
		this.widths.push(24*scale);
		this.heights.push(24*scale);

		this.frames.push("death-drowned-2");
		this.widths.push(28*scale);
		this.heights.push(28*scale);

		this.frames.push("death-drowned-3");
		this.widths.push(32*scale);
		this.heights.push(32*scale);
	}

	this.frames.push("death-skull");
	this.widths.push(30*scale);
	this.heights.push(32*scale);

	this.frame = this.frames[0];
	this.width = this.widths[0];
	this.height = this.heights[0];

	this.count = 0;
	this.currentFrame = 0;
	this.completed = false;

	this.update = function()
	{
		this.count++;

		if (this.count % 10 == 0)
		{
			if (this.count < 31)
			{
				this.frame = this.frames[++this.currentFrame];
				this.width = this.widths[this.currentFrame];
				this.height = this.heights[this.currentFrame];
			}
			else
				this.completed = true;
		}
	};
}
