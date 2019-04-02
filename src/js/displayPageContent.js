//displays news in each page in html

export function displayPageContent(newsArray, parentPage) {
  newsArray.forEach(item => {
    let newsTile = document.createElement("div");
    let newsTitle = document.createElement("p");
    let newsDetail = document.createElement("p");

    newsTile.classList.add("tile");
    newsTitle.classList.add("title");
    newsDetail.classList.add("details");
    newsTitle.textContent = item.title;
    newsDetail.textContent = item.details;

    parentPage.appendChild(newsTile);
    newsTile.appendChild(newsTitle);
    newsTile.appendChild(newsDetail);
  });
}

export function updateContent(newsArray, parentPage) {
  let page = document.querySelector(`#${parentPage}`);

  for (let i = 0; i < newsArray.length; i++) {
    page.children[i].querySelector(".title").textContent = newsArray[i].title;
    page.children[i].querySelector(".details").textContent =
      newsArray[i].details;
  }
}
