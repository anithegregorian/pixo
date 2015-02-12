# pixolay

**pixolay** is for pixel perfect overlay images used in Web Development.

Its very simple to use and comes as a javascript. To use it in your projects include ```src/pixolay.js```

Then add the code

```
$(function(){
	pixolay.init( 'images/home.png' );
});
```

Simple as that. **Pixolay** currently uses ```localStorage``` as its storage mechanism. You can turn the overlay on and off at any time and **Pixolay** will remember it.

It requires **jQuery** but this dependency will be removed in future versions.