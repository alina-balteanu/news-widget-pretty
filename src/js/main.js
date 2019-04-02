import "@babel/polyfill";
import { getPages } from "./getPages";
import { displayPageContent, updateContent } from "./displayPageContent";
import { carousel, nextSlide, updateHandlers } from "./carouselPages";
import { createPage } from "./createPage";

require("../scss/main.scss");

window.onload = function() {
  //make ajax call to retrieve data from api
  const fetchData = function() {
    fetch("http://www.mocky.io/v2/5ca33678330000213ed34344")
      .then(res => res.json())
      .then(data => {
        console.log("fetched");

        let newsWrap = document.querySelector(".news-wrapper");
        let parentLine = document.querySelector(".pageLines");

        //if not the first fetch, recreate pages and reattach handlers
        if (newsWrap.children.length > 4) {
          //delete previous pages and status bar
          while (newsWrap.children.length > 4) {
            newsWrap.removeChild(newsWrap.lastChild);
          }
          while (parentLine.children.length > 0) {
            parentLine.removeChild(parentLine.lastChild);
          }
          //split retrieved data into pages
          let pagesOb = getPages(data.news);

          //create new pages and status bar
          for (let key in pagesOb) {
            displayPageContent(pagesOb[key], createPage(key, pagesOb["page1"]));
          }
          //reset currentslide to 1 and reattach handlers on nav items
          updateHandlers();
          console.log("content updated");
        } else {
          //split retrieved data into pages
          let pagesOb = getPages(data.news.slice(0, 3 * 5));

          //create pages and display contents for each object page
          for (let key in pagesOb) {
            displayPageContent(pagesOb[key], createPage(key, pagesOb["page1"]));
          }
          //start slideshow
          carousel(nextSlide);
        }

        setTimeout(() => {
          fetchData();
          console.log("started new fetch timeout");
        }, 180000);
      })
      .catch(err => console.log(err));
  };

  fetchData();
};
