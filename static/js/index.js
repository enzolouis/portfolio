

let invisible_nav = document.getElementById("invisible")

function incrementHeight(height) {
	invisible_nav.style.height = height + "px";
}

function decrementHeight(height) {
	invisible_nav.style.height = height + "px";
}



let nav = false;

function showHamburgerNavBar() {
	if (nav == false) {
		let a = 2
		for (let i = 0; i <= 120 ; i++) {
			a += 2
			setTimeout(incrementHeight, a, i)
		}
		invisible_nav.style.visibility = "visible";
	} else {
		invisible_nav.style.visibility = "hidden";
		let a = 2
		for (let i = 120; i >= 0 ; i--) {
			a += 2
			setTimeout(decrementHeight, a, i)
		}
	}
	
	nav = !nav;
}


//


var scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll(".image-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("image-scroll-visible");
    } else {
      element.classList.add("image-scroll-hidden");
    }
  });
  scroll(loop);
}

loop();

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) + 300 &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth) + 300
  );
}

//

let absoluteBackground = document.getElementById("absoluteBackground")

function showMore(height) {
 	absoluteBackground.style.height = height + "px";
  console.log(absoluteBackground.style.height);
}

let isFinished = false;

function removeAbsBackground() {
		let a = 2
		for (let i = window.innerHeight; i >= 0 ; i--) {
			a += 0.4;
			setTimeout(showMore, a, i)
		}
}


