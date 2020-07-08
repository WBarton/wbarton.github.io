---
title: Graceful Degradation vs. Progressive Enhancement
layout: post
---
When it comes to responsive web design and at which end of the design you should choose it is between Graceful Degradation and Progressive Enhancement

The reasoning behind Graceful Degradation is that the design should function on as many possible browsers and devices using the latest technologies but still catering for users whose systems may not support them.

Progressive Enhancement is the opposite the first step is the minimal design and then the design can be gradually “enhanced”.

All websites should follow Graceful Degradation to some degree, not relying on Javascript effects, using pseudo elements like `:before` and `:after` to insert important information and using new techniques like box and text shadows and rounded corners (`border-radius`) as an enhancement instead of the be all and end all.

But&#8230; Responsive web design should start with mobile.
