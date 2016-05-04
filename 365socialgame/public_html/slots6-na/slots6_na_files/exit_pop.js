function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
/*if (isIE()) {
 alert('IE');
}*/

function PopIt() { 
			
		setTimeout(function(){exit_pop_do_autoclick();},400);
		return exit_pop_alert_text; 
}

function exit_pop_do_autoclick() {

	window.onbeforeunload = UnPopIt;	
	setPromo();
}

function UnPopIt()  {  }

jQuery(document).ready(function() {
	window.onbeforeunload = PopIt;
	jQuery("a").click(function(){ window.onbeforeunload = UnPopIt; });
	jQuery("input[type=submit]").click(function(){ window.onbeforeunload = UnPopIt; });
	jQuery("button[type=submit]").click(function(){ window.onbeforeunload = UnPopIt; });
	jQuery("input[type=button]").click(function(){ window.onbeforeunload = UnPopIt; });
	jQuery("input[type=image]").click(function(){ window.onbeforeunload = UnPopIt; });
	jQuery("form").submit(function(){ window.onbeforeunload = UnPopIt; });
	jQuery("input").submit(function(){ window.onbeforeunload = UnPopIt; });	
	
});