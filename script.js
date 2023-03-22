



function makeResizable(element) {
	if (element && jQuery(element).length) {
		var $el = jQuery(element);
		var elHeight = $el.outerHeight();
		var elWidth = $el.outerWidth();

		var $wrapper = $el.parent();

		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height()
			}
		}
		var scale = Math.min(
			starterData.size.width / $el.outerWidth(),
			starterData.size.height / $el.outerHeight()
		);
		if (scale > 1) {
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
jQuery(document).ready(function () {
	makeResizable('#very-specific-design');
});
jQuery(window).load(function () {
	//	makeResizable('#very-specific-design');
});
jQuery(window).resize(function () {
	makeResizable('#very-specific-design');
});


function mostrarp(divNum) {
	document.getElementById("text1").classList.add("hide");
	document.getElementById("text2").classList.add("hide");
	document.getElementById("text3").classList.add("hide");
	document.getElementById("text4").classList.add("hide");
	document.getElementById("text5").classList.add("hide");
	document.getElementById("text6").classList.add("hide");
	document.getElementById("text7").classList.add("hide");


	// Show the specific div
	document.getElementById("text" + divNum).classList.remove("hide");
}

function quitar() {
	let negro = document.getElementById("negro");

	negro.classList.remove("negro");
	negro.classList.add("negro-move");
}

function cerrar() {
	document.getElementById("text1").classList.add("hide");
	document.getElementById("text2").classList.add("hide");
	document.getElementById("text3").classList.add("hide");
	document.getElementById("text4").classList.add("hide");
	document.getElementById("text5").classList.add("hide");
	document.getElementById("text6").classList.add("hide");
	document.getElementById("text7").classList.add("hide");
}

function bajar() {
	var element = document.querySelector(".cuadro");
	var element2 = document.querySelector("#arrow-up");
	var element3 = document.querySelector("#flecha-1");
	setTimeout(function () {
		element3.setAttribute("onclick","subir()")
		element2.classList.remove("fa-arrow-down");
		element2.classList.add("fa-arrow-up");
		element.style.transform = "translateY(-266px)";
	}, 200);
}

function bajar2() {
	var element = document.querySelector("#cuadro2");
	//var element2 = document.querySelector("#arrow-up-2");
	var element3 = document.querySelector("#flecha-2");
	setTimeout(function () {
		element3.setAttribute("onclick","bajar3()")
		//element2.classList.remove("fa-arrow-down");
		//element2.classList.add("fa-arrow-up");
		element.style.transform = "translateY(-279px)";
	}, 200);
}

function bajar3() {
	var element = document.querySelector("#cuadro2");
	//var element2 = document.querySelector("#arrow-up-2");
	var element3 = document.querySelector("#flecha-2");
	setTimeout(function () {
		element3.setAttribute("onclick","bajar4()")
		//element2.classList.remove("fa-arrow-down");
		//element2.classList.add("fa-arrow-up");
		element.style.transform = "translateY(-607px)";
	}, 200);
}

function bajar4() {
	var element = document.querySelector("#cuadro2");
	var element2 = document.querySelector("#arrow-up-2");
	var element3 = document.querySelector("#flecha-2");
	setTimeout(function () {
		element3.setAttribute("onclick","subir2()")
		element2.classList.remove("fa-arrow-down");
		element2.classList.add("fa-arrow-up");
		element.style.transform = "translateY(-1008px)";
	}, 200);
}

function subir() {
	var element = document.querySelector(".cuadro");
	var element2 = document.querySelector("#arrow-up");
	var element3 = document.querySelector("#flecha-1");
	setTimeout(function () {
		element3.setAttribute("onclick","bajar()")
		element2.classList.remove("fa-arrow-up");
		element2.classList.add("fa-arrow-down");
		element.style.transform = "translateY(0px)";
	}, 200);
}

function subir2() {
	var element = document.querySelector("#cuadro2");
	var element2 = document.querySelector("#arrow-up-2");
	var element3 = document.querySelector("#flecha-2");
	setTimeout(function () {
		element3.setAttribute("onclick","bajar2()")
		element2.classList.remove("fa-arrow-up");
		element2.classList.add("fa-arrow-down");
		element.style.transform = "translateY(0px)";
	}, 200);
}