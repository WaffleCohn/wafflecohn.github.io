function draw(obj)
{
    if (obj.frame == null)
    {
        obj.rect.Draw(ctx);
    }
    else if (obj.frame != "_blank_")
    {
        var w = obj.width,
            h = obj.height,
            x = Math.abs(obj.rect.width - w) / 2 + obj.rect.x,
            y = Math.abs(obj.rect.height - h) / 2 + obj.rect.y;
        //console.log(obj.frame);
        //console.log(manager.getAsset("img/turtle1.png"));
        ctx.drawImage(manager.getAsset("img/" + obj.frame + ".png"), x, y, w, h);
    }
}

function formatRect(obj, rect)
{
    rect.x += (lineHeight - obj.width) / 2;
    rect.y += (lineHeight - obj.height) / 2;
}
