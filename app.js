// Make sure to change these!
const resumeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
const linkedinUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
const githubUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
const emailUrl = "mailto:none@mail.com"

const slideshowChangeTimeMS = 2500		// How long it takes for the slideshow to change frames

// Add more to the array as needed, each index of the array corrosponds to the id "slideshowX", where X is the index of the array
const slideimages = [
	createImgArray("media/projects/burgerapp_slide0.png", "media/projects/burgerapp_slide1.png")
]

var slideTimer = 0

function slideshowStep() {
	if (!document.images)
		return

	for(let i = 0; i < slideimages.length; i++) {
		let len = slideimages[i].length
		document.getElementById('slideshow' + i).src = slideimages[i][slideTimer % len].src
	}

	slideTimer++

	setTimeout("slideshowStep()", slideshowChangeTimeMS)
}

function createImgArray(...urls) {
	var imgArray = new Array()
	
	for(let i = 0; i < urls.length; i++) {
		imgArray[i] = new Image()
		imgArray[i].src = urls[i]
	}

	return imgArray
}

function replaceUrl(className, url) {
	var elements = document.getElementsByClassName(className)

	for(var i = 0; i < elements.length; i++)
		elements[i].href = url 
}

function initUrls() {
	replaceUrl("resume-url", resumeUrl)
	replaceUrl("linkedin-url", linkedinUrl)
	replaceUrl("github-url", githubUrl)
	replaceUrl("email-url", emailUrl)
}

initUrls()
slideshowStep()
