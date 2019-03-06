var c_s=1;
window.onload = function (){


	window.setInterval(slide,5000);

}
function slide() {
	var sliders=document.querySelectorAll('.carus .slide');
	sliders[c_s].className='slide showed';
	for(var j=0;j<sliders.length;j++) {
		if (j!=c_s) {sliders[j].className='slide hide';
	}
}
c_s++;
if (c_s===sliders.length) {c_s=0;}		

}

