

## React App using Web Components from NPM package

Using the Web Components from an NPM package built with the repo stencil-npm-depoy, https://github.com/iwswordpress/stencil-npm-deploy, this React App has four Custom HTML tags, one of which is used to get stock prices from an API.

The App.js has four custom html elements and two are just boilerplate text but there are two components that can work on their own but also interact with eachother.

<uc-stock-price> finds the stock price for a given symbol, uc-stock-finder finds a list of stock symbols for a search term. Selecting one then sends a Custom Event to the stock-price component, enters value in input field and carries out the fetching of the stock price and displaying it.
  
This demo shows how Web Components can be used in React apps as well as communicate with each other. CSS Variables set the color theme for these two components by adding these CSS Variables in the public/index.html.

The Web Components are based on Academind Web Components and StencilJS course on Udemy.com.

They are compiled and deployed as an NPM package for inclusion in this React App.
 
 
