function navbar() {
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top": itemPosNewAnimTop.top + "px",
		"left": itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top": itemPosNewAnimTop.top + "px",
			"left": itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () { navbar(); });
});
$(window).on('resize', function () {
	setTimeout(function () { navbar(); }, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () { navbar(); });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if (path == '') {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	// Add active class to target link
	target.parent().addClass('active');
});

$('.carousel').carousel({
	interval: 10000
});

function limpar(){
	var skates = document.getElementById("skates");
	var bmx = document.getElementById("bmx");
	var pecas = document.getElementById("pecas");
	var roupas = document.getElementById("roupas");
	var ahead = document.getElementById("ahead");
	var ollie = document.getElementById("ollie");
	var horus = document.getElementById("horus");
	var nike = document.getElementById("nike");

	if(skates.checked == true || bmx.checked == true || pecas.checked == true || roupas.checked == true || ahead.checked == true || ollie.checked == true || horus.checked == true || nike.checked == true ){
		skates.checked = false;
		bmx.checked = false;
		pecas.checked = false;
		roupas.checked = false;
		ahead.checked = false;
		ollie.checked = false;
		horus.checked = false;
		nike.checked = false;
	}
}