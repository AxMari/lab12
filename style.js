$(document).ready(function(){
	var originalText;


	$('li').hover(function(){
		$(this).fadeTo(200, 0.15);
	},
	function() {
		$(this).fadeTo(50, 1);
	});
	

	$('li').mouseup(function(){
		$(this).css("background-color", "blue");
			var originalText = $(this).text();
			$(this).text(originalText);
		
	$('li').mousedown(function(){
		$(this).css("background-color", "red");
			$(this).text("clicked");
	


	});		
});
								
});	
