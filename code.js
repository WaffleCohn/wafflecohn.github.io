/* MARK:- Load Acheivements */
var achievementHolder = document.getElementById("achievement-holder"),
    write = "";

write += '<div class="row">';
write += '<div class="col-sm-2 text-centered" style="color: #37474F;"><h3 style="margin: 0; margin-top: 5px; font-weight: bold;">Computer</h3><h3 style="margin: 0; font-weight: bold;">Science</h3></div>';

write += '<div class="col-sm-10">';
for (var i=0; i < achievements["Computer Science"].length; i++)
{
    var achievement = achievements["Computer Science"][i];
    write += '<div class="row">';
    write += '<div class="col-sm-6"><div class="achievement"><h4 style="margin-top: 0px">' + achievement["competition"] + '</h4></div></div>';
    write += '<div class="col-sm-6"><div class="achievement achievement-modifier"><h4 style="margin-top: 0px">' + achievement["award"] + '</h4></div></div>';
    write += '</div>';
}
write += '</div>';
write += '</div>';

// SPACE
write += '<div style="height: 20px;"></div>';

// MARK:- Others
write += '<div class="row">';
write += '<div class="col-sm-2 text-centered" style="color: #37474F;"><h3 style="margin: 0px; margin-top: 5px; font-weight: bold;">Other</h3></div>';

write += '<div class="col-sm-10">';
for (var i=0; i < achievements["Other"].length; i++)
{
    var achievement = achievements["Other"][i];
    write += '<div class="row">';
    write += '<div class="col-sm-6"><div class="achievement"><h4 style="margin-top: 0px">' + achievement["competition"] + '</h4></div></div>';
    write += '<div class="col-sm-6"><div class="achievement achievement-modifier"><h4 style="margin-top: 0px">' + achievement["award"] + '</h4></div></div>';
    write += '</div>';
}
write += '</div>';
write += '</div>';

achievementHolder.innerHTML += write;

/* MARK:- Smooth Scrolling */
$(function(){
    $("nav a").click(function(e){
        e.preventDefault();
        // $("html,body").scrollTo(this.hash, this.hash);
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);

        // remove underline from link
        this.focus();
        this.blur();
    });
});

/* MARK:- Egenda Downloads */
var counter = document.getElementById("egendaDownloadCount"),
    defaultCount = 180000;

function commaSeparate(x)
{
    var regex = /(\d{3})(?=\d)/g,
        str = "" + x;
    return str.split("").reverse().join("").replace(regex, "$1,").split("").reverse().join("");
}

// default in case of error
counter.innerHTML = commaSeparate(defaultCount);

// egenda stats
getData(function(){

    var downloads = Data.getDownloads();

    if (downloads < 100000)
    {
        downloads /= 10000;
        if (downloads - Math.floor(downloads) >= .5)
            downloads = Math.floor(downloads) + .5;
        else
            downloads = Math.floor(downloads);
        downloads *= 10000;
    }
    else
    {
        downloads /= 10000;
        downloads = Math.floor(downloads);
        downloads *= 10000;
    }

    counter.innerHTML = commaSeparate(downloads);

});


