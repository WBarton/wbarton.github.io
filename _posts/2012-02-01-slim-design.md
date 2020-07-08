---
title: Slim Design
layout: post
---
There are ways of improving a designs performance using methods that have been used before responsive web design was conceived.

Looking at the back-end of a website, the part the user does not see there is a lot of interesting items to consider. Most revolve around reducing file size and <acronym title="Hypertext Transfer Protocol">HTTP</acronym> requests.

Some of these aspects I&#8217;ll only briefly mention because they are mostly commpn knowledge and a lot of resarch has already been don into them.

#### Style and Scripts

A website renders in the browser top to bottom. so the position at which styles and scripts are introduce is important, style sheets should be referenced at the top of the document, so that is is loaded before the markup is rendered meaning that the style of the website is displayed without a flash of unstyled content (FOUC) the first signs of this term being used is in an <a href="http://bluerobot.com/web/css/fouc.asp/" target="_blank">article on bluerobot.com in 2001</a>.

Scripts should be placed at the bottom of a website because if placed at the top they are loaded in before the website continues to render which can cause a blank white screen.

#### Minification

to reduce the file size of javascript and CSS files they can be minified, minifying removes any white space and comments.

BlueRobot (2001) *Flash of Unstyled Content (FOUC)* [online] available from <http://bluerobot.com/web/css/fouc.asp/> [15 December 2011]
 
Souders, S. (2007) *High performance web sites : essential knowledge for frontend engineers*. Farnham: O’Reilly
