function setScrollCSS() {
	const htmlElement = document.documentElement
	const percentScrolled = htmlElement.scrollTop / (htmlElement.scrollHeight - htmlElement.clientHeight)

	htmlElement.style.setProperty("--scroll", Math.min(percentScrolled * 100 , 100))
	console.log(Math.min(percentScrolled * 100 , 100))
}

const observer = new IntersectionObserver(entries => {
	for (let i = entries.length - 1; i >= 0; i--) {
	  const entry = entries[i]
	  if (entry.isIntersecting) {
		document.querySelectorAll("[data-img]").forEach(img => {
		  img.classList.remove("show")
		})
		const img = document.querySelector(entry.target.dataset.imgToShow)
		img?.classList.add("show")
		break
	  }
	}
  })
  
  document.querySelectorAll("[data-img-to-show]").forEach(section => {
	observer.observe(section)
  })

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

window.addEventListener("scroll", setScrollCSS)
window.addEventListener("resize", setScrollCSS)

setScrollCSS()
slideshowStep()
