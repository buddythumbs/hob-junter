This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![](https://github.com/buddythumbs/hob-junter/blob/master/Dec-09-2018%2021-24-46.gif)
DEMO SITE: http://buddythumbs.github.io/hob-junter 
## Specification

Create a single page application using the dataatwork.org open API

API Documentation
https://any-api.com/dataatwork_org/dataatwork_org/docs/API_Description

## Requirements
This app should contain two views:
    1. Job search view
        This should be the default view and should be comprised of:
        - An autocomplete search box which allows the user to search for job titles by keyword(s)
        - A list of search results for any given search
        - Clicking on a result should bring the user to the corresponding details view
    2. Job details view
        Each job detail view should have a unique addressable URL and should display job details such as:
        - Job title
        - Top 5 related jobs
        - Top 10 related skills

## Deliverables

    1. A URL to a publicly available source code repository on Github (this repo) 
    2. A URL to the publicly available final build on Github pages, AWS S3 or a similar service

## Project structure

Project will use `redux` for state management in addition to `react-router` for routing to both views.
The actions, reducers and store directories are all boilerplate for redux.

The sagas directory is included as `react-saga` will be used to make for better async store management

Test coverage is minimal and covers very basic "component does render" tests.
Enzyme and Jest combined could be used to properly test react components given time.

All components have `PropTypes` set in order to properly document the expected props structure.

```
├── README.md
├── archi-diagram.xml
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── precache-manifest.82cb65d1999ea11f42a4eef4707a1cf2.js
│   ├── service-worker.js
│   └── static
│       ├── css
│       ├── js
│       └── media
├── diagrams
│   └── system-context-diagram.png
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── actions
    │   ├── about.js
    │   ├── contact.js
    │   ├── router.js
    │   └── search.js
    ├── api
    │   └── data-at-work-api.js
    ├── assets
    │   └── jpg
    ├── components
    │   ├── About
    │   ├── Contact
    │   ├── Home
    │   ├── JobDetail
    │   └── Search
    ├── containers
    │   ├── AboutPage.jsx
    │   ├── ContactPage.jsx
    │   ├── HomePage.jsx
    │   ├── JobPage.jsx
    │   ├── LayoutPage.jsx
    │   └── SearchPage.jsx
    ├── elements
    │   ├── components.jsx
    │   └── layouts.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reducers
    │   ├── index.js
    │   └── search.js
    ├── sagas
    │   ├── routerSaga.js
    │   └── searchSaga.js
    ├── serviceWorker.js
    ├── store
    │   └── configureStore.js
    ├── test
    │   ├── About.test.js
    │   ├── App.test.js
    │   ├── Contact.test.js
    │   ├── Home.test.js
    │   ├── JobDetail.test.js
    │   ├── JobTypeDetail.test.js
    │   ├── KeyWordSearcher.test.js
    │   ├── SKill.test.js
    │   ├── Search.test.js
    │   └── SearchResults.test.js
    └── utils
        ├── memoize.js
        ├── theme.js
        └── types.js
```
