function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	const centerY = window.innerHeight / 2;
	const range = 200;
	return (
		rect.top > centerY - range &&
		rect.bottom < centerY + range
	);
}

const bodies = document.getElementsByClassName('body');

document.addEventListener('scroll', function () {
	for(body of bodies) {
		if (isInViewport(body)) {
			body.style.borderColor = "#707070";
		} else {
			body.style.borderColor  = "#404040";
		}
	}
}, {
	passive: true
});

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

slideshowStep()

function createImgArray(...urls) {
	var imgArray = new Array()
	
	for(let i = 0; i < urls.length; i++) {
		imgArray[i] = new Image()
		imgArray[i].src = urls[i]
	}

	return imgArray
}