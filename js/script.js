window.onload = function() {
	var c_s=1;
	var aColor=['#800000','#ff0000 ','#ffa500','#ffff00','#808000','#00ff00','#008000','#00ffff','#0000ff','#000080','#008080','#ff00ff','#800080'];		
	var i=0;
	function chgColor() {
		var bgfon=document.querySelector(".backFon__BeerChange__color");
		bgfon.style="background:"+aColor[i];

		i++;
		if (i>=aColor.length) {i=0;}	
		for(let opZ=0;opZ<=1;opZ+=0.1) {
		}
	}

	function slide() {
		var sliders=document.querySelectorAll('.carus .slide');
		sliders[c_s].className='slide showed';
		for(var j=0;j<sliders.length;j++) {
			if (j!=c_s) {sliders[j].className='slide hide';	}
		}
		c_s++;
		if (c_s===sliders.length) {c_s=0;}		
	}



	setInterval(chgColor,1500);
	//setInterval(slide,5000);

}


