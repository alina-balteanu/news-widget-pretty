//split retrieved data into pages props
//in case a page need to have more news, i can be incremented to desired value and the rest of the logic still works
export function getPages(data) {
  let nr = 1;
  let dbList = {};
  let increment = data.length / 3;
  for (let i = 0; i < data.length; i += 5) {
    let page = "page" + nr;
    dbList[page] = data.slice(i, i + 5);

    nr++;
  }
  return dbList;
}
