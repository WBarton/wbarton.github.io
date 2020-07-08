---
title: Bottom Up
layout: post
---
CSS renders from top to bottom hence *cascading* style sheet. The style sheet is referenced at the start of the markup in the `head`. The reason for this is the sooner it is referenced the sooner the browser can begin to render the website. This stops the flash of unstyled content (FOUC), a problem more commonly associated with a slower Internet connection. Like mobile data connections?  
There is another exploit of CSS that can benefit the mobile user, *start small*.  
Declare the styles for mobile browsers at the start of the CSS, this stops the browser reading and rendering the full site before the mobile site. Then using media queries to build on the design and optimise it for larger screens.
