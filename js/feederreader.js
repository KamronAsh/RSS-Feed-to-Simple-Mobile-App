var nextID = parseInt(0);
var prevID = parseInt(0);

$(document).ready(function() {
	$.ajax({
		dataType: "json",
		type: "GET",
		url: "rsstojson.php",
		data: { url: rssfeed }
	}).done(function( msg ) {
		
		$("h1#feedtitle").text(msg.title);
		
		function LoadArticle(storypane, title, articleID) {
			$(storypane).find("article").scrollTop(0);
			$(storypane).find("article div").html(msg.item[articleID].description);
			$(title).text(msg.item[articleID].title);
			nextID = parseInt(articleID)+1;
			prevID = parseInt(articleID)-1;
			
			if(articleID <= 0) { $(".icon-arrow-left").hide(); } else { $(".icon-arrow-left").show(); }
			if(articleID >= 20) { $(".icon-arrow-right").hide(); } else { $(".icon-arrow-right").show(); }
			
		}
		// Go through the JSON feed, change 20 to however many items you want to show.
		for(var i=0; i < 20; i++) {
			$('#titlelist').append('<li id="'+msg.item[i].id+'">'+msg.item[i].title+'</li>');
		}
		$("#titlelist li").on("click",function() {
			var storypane = $("#storypane");
			var clickedID = $(this).attr("id");
			var title = $("#storytitle");
			
			LoadArticle(storypane, title, clickedID);
			// Make the body non-scrollable if on mobile
			if($(window).width() < 768) {
				$("body").addClass("noscroll");			
			}
			$(storypane).show().animate({"top":0},300);
			
			$(storypane).find(".icon-chevron-down").on("click",function() {
				$("article").scrollTop(0);
				$(storypane).animate({"top":$(window).height()},200, function() {
					$(this).hide();
					//Make the body scrollable again. 
					$("body").removeClass("noscroll");
					
				});
			});
			
			$(storypane).find(".icon-arrow-right").on("click", function() {
				LoadArticle(storypane, title, nextID);
			});
			
			$(storypane).find(".icon-arrow-left").on("click", function() {
				LoadArticle(storypane, title, prevID);
			});
		});
	});
	// Put the storypane on the bottom if on mobile
	if($(window).width() < 768) {
		$("#storypane").css("top",$(window).height()).hide();
	}
	
	// Fix the height of the scrollable parts.
	$("ul#titlelist").height($(window).height() - 50);
	$("article").height($(window).height() - 50);
});