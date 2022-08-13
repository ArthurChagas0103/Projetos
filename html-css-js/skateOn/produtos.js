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

function limpar() {
	var skates = document.getElementById("skates");
	var bmx = document.getElementById("bmx");
	var pecas = document.getElementById("pecas");
	var roupas = document.getElementById("roupas");
	var ahead = document.getElementById("ahead");
	var ollie = document.getElementById("ollie");
	var horus = document.getElementById("horus");
	var route = document.getElementById("route");
	var mil = document.getElementById("milReais");
	var quinhentos = document.getElementById("quinhentosReais");
	var duzentos = document.getElementById("duzentosReais");
	var cem = document.getElementById("cemReais");
	var gts = document.getElementById("gts");
	var romwe = document.getElementById("romwe");
	var dc = document.getElementById("dc");
	var ous = document.getElementById("ous");

	if (skates.checked == true || bmx.checked == true || pecas.checked == true || roupas.checked == true || ahead.checked == true || ollie.checked == true || horus.checked == true || route.checked == true || mil.checked == true || quinhentos.checked == true || duzentos.checked == true || cem.checked == true || gts.checked == true || romwe.checked == true || dc.checked == true || ous.checked == true) {
		skates.checked = false;
		bmx.checked = false;
		pecas.checked = false;
		roupas.checked = false;
		ahead.checked = false;
		ollie.checked = false;
		horus.checked = false;
		route.checked = false;
		mil.checked = false;
		quinhentos.checked = false;
		duzentos.checked = false;
		cem.checked = false;
		gts.checked = false;
		romwe.checked = false;
		dc.checked = false;
		ous.checked = false;
	}

	var divSkates = document.getElementById("divSkates");
	var bicicletas = document.getElementById("bicicletas");
	var divRoupas = document.getElementById("divRoupas");
	var sapatos = document.getElementById("sapatos");
	var divPecas = document.getElementById("divPecas");

	divSkates.style.display = 'grid'
	bicicletas.style.display = 'grid'
	divRoupas.style.display = 'grid'
	sapatos.style.display = 'grid'
	divPecas.style.display = 'grid'
}

var TRange = null;

function findString(str) {
	if (parseInt(navigator.appVersion) < 4) return;
	var strFound;
	if (window.find) {

		strFound = self.find(str);
		if (!strFound) {
			strFound = self.find(str, 0, 1);
			while (self.find(str, 0, 1)) continue;
		}
	}
	else if (navigator.appName.indexOf("Microsoft") != -1) {

		if (TRange != null) {
			TRange.collapse(false);
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
		if (TRange == null || strFound == 0) {
			TRange = self.document.body.createTextRange();
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
	}
	else if (navigator.appName == "Opera") {
		alert("Opera browsers not supported, sorry...")
		return;
	}
	if (!strFound) alert("String '" + str + "' not found!")
	return;
}

function filtrar(){
	var skates = document.getElementById("skates");
	var bmx = document.getElementById("bmx");
	var pecas = document.getElementById("pecas");
	var roupas = document.getElementById("roupas");
	var ahead = document.getElementById("ahead");
	var ollie = document.getElementById("ollie");
	var horus = document.getElementById("horus");
	var route = document.getElementById("route");
	var mil = document.getElementById("milReais");
	var quinhentos = document.getElementById("quinhentosReais");
	var duzentos = document.getElementById("duzentosReais");
	var cem = document.getElementById("cemReais");
	var gts = document.getElementById("gts");
	var romwe = document.getElementById("romwe");
	var dc = document.getElementById("dc");
	var ous = document.getElementById("ous");

	var divSkates = document.getElementById("divSkates");
	var bicicletas = document.getElementById("bicicletas");
	var divRoupas = document.getElementById("divRoupas");
	var sapatos = document.getElementById("sapatos");
	var divPecas = document.getElementById("divPecas");
	
	if (skates.checked == true){
		divSkates.style.display = 'grid'
		bicicletas.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'none'
		divPecas.style.display = 'none'
	}
	if (bmx.checked == true){
		bicicletas.style.display = 'grid'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'none'
		divPecas.style.display = 'none'
	}
	if (pecas.checked == true){
		divPecas.style.display = 'grid'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'none'
	}
	if (roupas.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'grid'
		sapatos.style.display = 'none'
	}
	if (ahead.checked == true){
		divPecas.style.display = 'grid'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'grid'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'none'
	}
	if (ollie.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'grid'
	}
	if (horus.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'grid'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'none'
	}
	if (route.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'grid'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'none'
	}
	if (gts.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'grid'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'none'
	}
	if (romwe.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'grid'
		sapatos.style.display = 'none'
	}
	if (dc.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'grid'
	}
	if (ous.checked == true){
		divPecas.style.display = 'none'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'none'
		sapatos.style.display = 'grid'
	}
	if (mil.checked == true){
		divPecas.style.display = 'grid'
		bicicletas.style.display = 'grid'
		divSkates.style.display = 'grid'
		divRoupas.style.display = 'grid'
		sapatos.style.display = 'grid'
	}
	if (quinhentos.checked == true){
		divPecas.style.display = 'grid'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'grid'
		divRoupas.style.display = 'grid'
		sapatos.style.display = 'grid'
	}
	if (duzentos.checked == true){
		divPecas.style.display = 'grid'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'grid'
		sapatos.style.display = 'grid'
	}
	if (cem.checked == true){
		divPecas.style.display = 'grid'
		bicicletas.style.display = 'none'
		divSkates.style.display = 'none'
		divRoupas.style.display = 'grid'
		sapatos.style.display = 'grid'
	}
}

function comprar(){
	alert('Compra realizada com sucesso!')
}

	
