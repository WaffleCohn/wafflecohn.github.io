/**
  *
  * Collectables/Items Elements Classes
  *
  */

Hamentaschen = function(c)
{
    this.rect = new Rectangle();
    this.color = c;
    this.frame = "hamentaschen-" + color;
    this.points;
}

Star = function(n)
{
    this.width = 14 * scale;
    this.height = 14 * scale;
    this.rect = new Rectangle(n * (this.width + 10) + 5, lineHeight * 15 + 5, this.width, this.height);
    this.frame = "star2";
    this.points;
}
