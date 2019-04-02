const newsWrapper = document.querySelector(".news-wrapper");
const pageLines = document.querySelector(".pageLines");
let stringw = getComputedStyle(pageLines).width;
let w = stringw.slice(w, -2);

//creates a div wrapper for each page, which contains the nr of news wanted per page
export function createPage(key, data) {
  let pageLine = document.createElement("div");
  let pageWrap = document.createElement("div");
  let lineW = parseFloat(w) / data.length - 10 + "px";

  pageLine.setAttribute("id", "line" + key);
  pageLine.classList.add("pageLine");
  pageLine.style.width = lineW;

  pageWrap.setAttribute("id", key);
  pageWrap.classList.add("slides");

  if (key !== "page1") {
    pageWrap.hidden = true;
  } else {
    pageLine.classList.add("active");
  }

  newsWrapper.appendChild(pageWrap);
  pageLines.appendChild(pageLine);

  return pageWrap;
}
