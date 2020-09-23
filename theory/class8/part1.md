### Vue Router Basics

- Client-Side Routing
- Steting up Vue Router
- Named Routes 
- Redirecting & Aliasing

* Building an example App
Changes: 
1) Remove 3 old components
2) Create 3 new views 
3) Update router.js
4) Update Navigation links


1) Server-Side Routing

When it comes to websites, typically we connect our page together with links, right? A link gets clicked, it calls back to the server for the next page, and that page gets loaded.

![serverSide](../assets/class8/client-side.jpg)

We call this “Server-side Routing” since the client is making a request to the server on every URL change.

When it comes to Vue, many choose client-side routing, meaning that the routing happens in the browser itself using JavaScript. Our webpage is loaded from a single index.html page and we can use client-side routing to dynamically present different views, depending on which link is clicked. Often the view we need to show has already been loaded into the browser, so we don’t need to reach out to the server for it.

![clientSide](../assets/class8/client-side.jpg)

A Single Page Application (SPA) is defined as a web app that loads from a single page and dynamically updates that page as the user interacts with the app. However, if we’re using a single page application we need a way to navigate between content (client-side routing).


### How can we implement client-side routing in a single page Vue application?
Vue has its own official routing solution, called Vue Router. 

