const resumeUrl = "https://jason-heller.github.io/resume/resume.pdf"
const linkedinUrl = "https://linkedin.com/in/jasonheller96"
const githubUrl = "https://github.com/jason-heller"
const emailUrl = "mailto:jasonheller96@gmail.com"

const slideimages = [
	createImgArray("media/projects/project3_gifA.gif", "media/projects/project3_gifB.gif", "media/projects/project3_gifC.gif"),
	createImgArray("media/projects/project4_gifA.gif", "media/projects/project4_gifB.gif", "media/projects/project4_gifC.gif")
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

	setTimeout("slideshowStep()", 2500)
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
