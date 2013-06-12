$(function () {
    $("#menu a").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 90 }, 500);
    });
	$("#gallery img").each(function () {
		$(this).parent().css("background-image", "url(" + $(this).attr("src") + ")");
	});
	$(".frame").click(function () {
		$(this).toggleClass("view");
		$("#viewer").toggle();
	});
	
});