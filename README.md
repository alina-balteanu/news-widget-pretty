# News Widget


## News Widget with API data update through Ajax

- The widget first retrieves some data from an API, which it displays in pages of 5 news each
- The pages and the navigation lines showing the page you're in are dynamically created
- The pages change automatically every 15 seconds, but user can use the arrows or the navigation lines to switch between pages
- Ajax calls are made every 3 minutes and new data is retrieved from the API, and new pages created that match the number of items in the API


## How to use

- **npm install** to add dependencies
- **npm run build** to build production file and start watching it. see script in package.json file
- needs to be run on server (you can use live-server from your IDE)
