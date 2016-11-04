/**
  *
  * Asset Manager for loading resources
  *
  */

AssetManager = function()
{

    this.successCount = 0;
    this.errorCount = 0;
    this.cache = {};
    this.downloadQueue = [];

    this.queueDownload = function(path)
    {
        this.downloadQueue.push(path);
    };

    this.isDone = function()
    {
        return (this.downloadQueue.length == this.successCount + this.errorCount);
    };

    this.downloadAll = function(downloadCallback)
    {
        if (this.downloadQueue.length == 0)
            downloadCallback();

        for (var i=0; i < this.downloadQueue.length; i++)
        {
            var path = this.downloadQueue[i],
            img = new Image(),
            that = this;

            img.addEventListener("load", function() {
                //console.log(this.src + " is loaded");
                that.successCount++;
                if (that.isDone())
                {
                    downloadCallback();
                }
            }, false);

            img.addEventListener("error", function() {
                that.errorCount++;
                if (that.isDone())
                {
                    downloadCallback();
                }
            }, false);

            img.src = path;
            this.cache[path] = img;
        }
    };

    this.getAsset = function(path)
    {
        return this.cache[path];
    }

};
