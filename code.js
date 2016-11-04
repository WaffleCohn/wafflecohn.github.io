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
