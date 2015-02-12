/**
*------------------------------------------------------------------------------------------+
* COMPANY: Raven Developers 2015
+------------------------------------------------------------------------------------------+
* FILE INFO: Overlay script helper for pixel perfect development
+------------------------------------------------------------------------------------------+
* WEBSITE: http://www.ravendevelopers.com
+------------------------------------------------------------------------------------------+
* Portions created by Anirudh K. Mahant are Copyright of Raven Developers (C) 2015.
+------------------------------------------------------------------------------------------+
* COPYRIGHT NOTICE:
* The original author(s) retain all the copyrights of this file.
* Portions created by Anirudh K. Mahant (original developer) are Copyright of Raven Developers (C) 2015.
* Portions may contain jQuery JavaScript framework developed by John Resig and other
* community members. More info at http://docs.jquery.com/About
* jQuery LICENSE:
* Copyright (c) 2008 John Resig (jquery.com)
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
+-------------------------------------------------------------------------------------------+
*/

(function (pixolay, undefined) {
	'use strict';
	var overlayHTML = '<div class=\"designOverlay\"><a class=\"overlay-off\" href=\"javascript:void(0)\"><span class=\"glyphicon glyphicon-eye-close\"><\/span><\/a><img id=\"no-overlay\" src=\"\" alt=\"\"\/><a class=\"overlay-on\" href=\"javascript:void(0)\"><span class=\"glyphicon glyphicon-eye-open\"><\/span><\/a><\/div>';

	var overlayCSS = '<style type="text/css">' + '.designOverlay{position:absolute;left:0;top:0;width:100%;height:101%;text-align:center;}.designOverlay a{position:fixed;z-index:6000;width:40px;height:40px;color:#fff;font-size:2.5rem;text-align:center;}.designOverlay a span{color:rgba(255,255,255,0.5);vertical-align:sub;}.designOverlay img{opacity:0.3;position:relative;z-index:5000;}.overlay-off{left:55px;top:15px;background:rgba(113,19,19,0.5);}.overlay-on{left:15px;top:15px;background:rgba(19,112,20,0.5);}#no-overlay:target{display:none;}' + '</style>';

	pixolay.init = function( imageFile ){
		imageFile = typeof imageFile !== 'undefined' ? imageFile : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'; // Default
		if (typeof jQuery != 'undefined') {

			var $body = jQuery('body');
			var $head = jQuery('head');

			// Append/Prepend CSS & HTML to DOM
			$head.append(overlayCSS);
			$body.prepend(overlayHTML);
			var $overlayImg = jQuery('img#no-overlay');

			// DOM is ready
			var $overLayOn = jQuery('a.overlay-on');
			var $overLayOff = jQuery('a.overlay-off');
			var overlaySetting = localStorage.getItem('isOverlayOn');

			if ( typeof overlaySetting != 'undefined' && overlaySetting == true ){
				activateOverlayImage();
			}

			$overLayOn.click(function(){
				activateOverlayImage();
			});

			$overLayOff.click(function(){
				deactivateOverlayImage();
			});

		}

		function activateOverlayImage(){
			$overlayImg.attr('src', imageFile);
			localStorage.setItem('isOverlayOn', 1);
		}

		function deactivateOverlayImage(){
			$overlayImg.attr('src', '');
			localStorage.setItem('isOverlayOn', 0);
		}

	};


})(window.pixolay = window.pixolay || {});