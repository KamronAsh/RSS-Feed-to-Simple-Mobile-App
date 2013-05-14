RSS Feed to Simple Mobile App
=============================

Built on PHP, JSON, LESS and jQuery, this will take an RSS feed and convert it into a simple mobile web app.

If you've got a blog that has an RSS feed, this little set of scripts will turn your RSS feed into the world's simplest mobile app. A small chunk of PHP will turn your RSS feed into JSON, where it is parsed with jQuery and thrown into a mobile web app.

##But wait, there's more!##

It was built with LESS and uses mixins for the color theme, so you can define your app color and it will style the app appropriately.

##Desktop support too!##

Yeah, just like all good web stuff these days, this is responsive so it'll work all the way down to IE7, as well as modern browsers.

IE7 support is obviously not recommended, and there are some strange layout issues. With enough CSS hacks this should be manageable.

##Easy to configure##

At the bottom of index.html, just change: 

``var rssfeed = "http://www.engadget.com/rss.xml";``

Simply insert the RSS feed of your choosing, and it should work. If it doesn't, let me know and I'll get it resolved. 
