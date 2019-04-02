let currentSlide = 1;

export function carousel(fn) {
  updateHandlers();
  setTimeout(fn, 15000); //start carousel on first fetch
}

export function nextSlide() {
  const slides = Array.from(document.querySelectorAll(".slides"));
  const pageLines = Array.from(document.querySelectorAll(".pageLine"));

  //toggle nonactive dots,hide pages except for current
  toggleClasses(slides, pageLines);
  setTimeout(nextSlide, 15000);
}

function toggleClasses(slides, pageLines) {
  if (currentSlide >= slides.length || currentSlide < 0) {
    currentSlide = 0; //reset count if currSlide bigger than nr of pages
  }

  slides.forEach(el => {
    el.hidden = true; // make all the pages hidden first
  });

  slides[currentSlide].hidden = false; ////except for the one corresponding to the current active dot

  pageLines.forEach(el => {
    el.classList.remove("active");
  });
  pageLines[currentSlide].classList.add("active");
  currentSlide++;
}

export function updateHandlers() {
  currentSlide = 1; //reset currentslide to 1 when Ajax retrieves new data

  const slides = Array.from(document.querySelectorAll(".slides"));
  const pageLines = Array.from(document.querySelectorAll(".pageLine"));
  const prevArrow = document.querySelector(".fa-long-arrow-alt-left");
  const nextArrow = document.querySelector(".fa-long-arrow-alt-right");

  for (let pageLine of pageLines) {
    pageLine.onclick = pageLineHandler;
  }

  prevArrow.onclick = prevHandler;
  nextArrow.onclick = nextHandler;

  function prevHandler() {
    let visiblePage = document.querySelector(".slides:not([hidden])");
    //get page nr from visible page id
    let index = visiblePage.id.match(/\d/)[0] - 1;
    currentSlide = index - 1;
    toggleClasses(slides, pageLines);
  }
  function nextHandler() {
    let visiblePage = document.querySelector(".slides:not([hidden])");
    //get page nr from visible page id
    let index = visiblePage.id.match(/\d/)[0] - 1;
    currentSlide = index + 1;
    if (currentSlide != slides.length) {
      toggleClasses(slides, pageLines);
    }
  }

  function pageLineHandler(e) {
    currentSlide = pageLines.indexOf(e.target);
    toggleClasses(slides, pageLines);
  }
}
