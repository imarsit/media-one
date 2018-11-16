//jQuery Scripts
includeScript('../public/javascripts/jquery.min.js');
includeScript('../public/javascripts/lightbox.min.js');
includeScript('../public/javascripts/bootstrap.min.js');
includeScript('../public/javascripts/bootstrap-hover-dropdown.min.js');
includeScript('../public/javascripts/owl.carousel.min.js');
includeScript('../public/javascripts/jquery.countTo.js');
includeScript('../public/javascripts/jquery.appear.js');
includeScript('../public/javascripts/plugins-scroll.js');
includeScript('../public/javascripts/isotope.pkgd.min.js');
includeScript('../public/javascripts/jquery.easing.min.js');
includeScript('../public/javascripts/jquery.easypiechart.min.js');
includeScript('../public/javascripts/jquery.flexslider-min.js');
includeScript('../public/javascripts/imagesloaded.pkgd.min.js');
includeScript('../public/javascripts/wow.min.js');

//SLIDER REVOLUTION 4.x SCRIPTS
includeScript('../public/javascripts/jquery.themepunch.tools.min.js');
includeScript('../public/javascripts/jquery.themepunch.revolution.min.js');

// Custom Theme JavaScript
includeScript('../public/javascripts/scripts.js');







function includeScript(url) {
	document.write('<script type="text/javascript" src="' + url + '"></script>');
	return false;
}
