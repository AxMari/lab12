$(document).ready(function(){


	$('li').hover(function(){
		$(this).fadeTo(400, 0.25);
	},
	function() {
		$(this).fadeTo(400, 1);
	});
	
	

	$('li').mousedown(function(){
		$(this).css("background-color", "red");
			$(this).text("clicked");
	$('li').mouseup(function(){
		$(this).css("background-color", "blue");
			$(this).text("unclicked");
		
	});		
});
								
});	
