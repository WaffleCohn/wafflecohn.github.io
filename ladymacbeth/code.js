var home = document.getElementById("home"),
	video = document.getElementById("videoPage"),
	story = document.getElementById("storyPage"),
	storyContainer = document.getElementById("storyContainer");

// alternate video links
var alternates = ["http://letterartonline.com/ari/ladymacbeth.mp4", "https://youtu.be/Szm_UKYWq1M"];

// display story
for (var i=0; i < storyJSON.paragraphs.length; i++)
{
	var str = storyJSON.paragraphs[i];
	if (~str.indexOf("CENTER:"))
		storyContainer.innerHTML += "<p style='text-align: center;'>" + str.replace("CENTER:", "") + "</p>";
	else if (~str.indexOf("BLOCKQUOTE:"))
		storyContainer.innerHTML += "<p class='blockquote'>" + str.replace("BLOCKQUOTE:", "") + "</p>";
	else
		storyContainer.innerHTML += "<p>" + str + "</p>";
}

function displayVideo()
{
	home.style.display = "none";
	video.style.display = "block";
}

function displayStory()
{
	home.style.display = "none";
	story.style.display = "block";
}

function returnHome()
{
	home.style.display = "block";
	video.style.display = "none";
	story.style.display = "none";
}
