let dropdown = false

document.querySelector('.phones__dropdown_active').addEventListener('click', function() {

	if(!dropdown){
		document.querySelector('.phones__dropdown_other').style.opacity = 1;
		document.querySelector('.phones__dropdown_other').style.pointerEvents = 'auto';
		dropdown =!dropdown;
	}else{
		document.querySelector('.phones__dropdown_other').style.opacity = 0;
	document.querySelector('.phones__dropdown_other').style.pointerEvents = 'none';
	dropdown =!dropdown;
	}

})

document.querySelector('.close-dropdown').addEventListener('click', function () {
	document.querySelector('.phones__dropdown_other').style.opacity = 0;
	document.querySelector('.phones__dropdown_other').style.pointerEvents = 'none';
		
})

let operator = false;

document.getElementById('phone-operator').onclick = function (){
	if(!operator){
		document.querySelector('.phone__operator').style.opacity = 1;
		document.querySelector('.phone__operator').style.pointerEvents = 'auto';
		operator =!operator;
	}else{
		document.querySelector('.phone__operator').style.pointerEvents = 'none';
		document.querySelector('.phone__operator').style.opacity = 0;
		operator =!operator;
	}
}

let open1 = false;


document.getElementById('services-1').onclick = function() {

	if(!open1){
		document.getElementById('list-1').style.height = 'auto';
		document.getElementById('list-1').style.padding = '30px 25px';
		document.getElementById('list-1').style.opacity = '1';
		document.getElementById('list-1').style.pointerEvents = 'auto';
		document.getElementById('list-1').style.visibility = 'visible';
		document.getElementById('open-1').style.transform = 'rotate(225deg)';
		open1 = !open1;
	}else{
		document.getElementById('list-1').style.height = '0';
		document.getElementById('list-1').style.padding = '0';
		document.getElementById('list-1').style.opacity = '0';
		document.getElementById('list-1').style.pointerEvents = 'none';
		document.getElementById('list-1').style.visibility = 'hidden';
		document.getElementById('open-1').style.transform = 'rotate(0deg)';
		open1 = !open1;
	}

}

let open2 = false;


document.getElementById('services-2').onclick = function() {

	if(!open2){
		document.getElementById('list-2').style.height = 'auto';
		document.getElementById('list-2').style.padding = '30px 25px';
		document.getElementById('list-2').style.opacity = '1';
		document.getElementById('list-2').style.pointerEvents = 'auto';
		document.getElementById('list-2').style.visibility = 'visible';
		document.getElementById('open-2').style.transform = 'rotate(225deg)';
		open2 = !open2;
	}else{
		document.getElementById('list-2').style.height = '0';
		document.getElementById('list-2').style.padding = '0';
		document.getElementById('list-2').style.opacity = '0';
		document.getElementById('list-2').style.pointerEvents = 'none';
		document.getElementById('list-2').style.visibility = 'hidden';
		document.getElementById('open-2').style.transform = 'rotate(0deg)';
		open2 = !open2;
	}

}

let open3 = false;


document.getElementById('services-3').onclick = function() {

	if(!open3){
		document.getElementById('list-3').style.height = 'auto';
		document.getElementById('list-3').style.padding = '30px 25px';
		document.getElementById('list-3').style.opacity = '1';
		document.getElementById('list-3').style.pointerEvents = 'auto';
		document.getElementById('list-3').style.visibility = 'visible';
		document.getElementById('open-3').style.transform = 'rotate(225deg)';
		open3 = !open3;
	}else{
		document.getElementById('list-3').style.height = '0';
		document.getElementById('list-3').style.padding = '0';
		document.getElementById('list-3').style.opacity = '0';
		document.getElementById('list-3').style.pointerEvents = 'none';
		document.getElementById('list-3').style.visibility = 'hidden';
		document.getElementById('open-3').style.transform = 'rotate(0deg)';
		open3 = !open3;
	}

}

let open4 = false;


document.getElementById('services-4').onclick = function() {

	if(!open4){
		document.getElementById('list-4').style.height = 'auto';
		document.getElementById('list-4').style.padding = '30px 25px';
		document.getElementById('list-4').style.opacity = '1';
		document.getElementById('list-4').style.pointerEvents = 'auto';
		document.getElementById('list-4').style.visibility = 'visible';
		document.getElementById('open-4').style.transform = 'rotate(225deg)';
		open4 = !open4;
	}else{
		document.getElementById('list-4').style.height = '0';
		document.getElementById('list-4').style.padding = '0';
		document.getElementById('list-4').style.opacity = '0';
		document.getElementById('list-4').style.pointerEvents = 'none';
		document.getElementById('list-4').style.visibility = 'hidden';
		document.getElementById('open-4').style.transform = 'rotate(0deg)';
		open4 = !open4;
	}

}

let open5 = false;


document.getElementById('services-5').onclick = function() {

	if(!open5){
		document.getElementById('list-5').style.height = 'auto';
		document.getElementById('list-5').style.padding = '30px 25px';
		document.getElementById('list-5').style.opacity = '1';
		document.getElementById('list-5').style.pointerEvents = 'auto';
		document.getElementById('list-5').style.visibility = 'visible';
		document.getElementById('open-5').style.transform = 'rotate(225deg)';
		open5 = !open5;
	}else{
		document.getElementById('list-5').style.height = '0';
		document.getElementById('list-5').style.padding = '0';
		document.getElementById('list-5').style.opacity = '0';
		document.getElementById('list-5').style.pointerEvents = 'none';
		document.getElementById('list-5').style.visibility = 'hidden';
		document.getElementById('open-5').style.transform = 'rotate(0deg)';
		open5 = !open5;
	}

}

let open6 = false;


document.getElementById('services-6').onclick = function() {

	if(!open6){
		document.getElementById('list-6').style.height = 'auto';
		document.getElementById('list-6').style.padding = '30px 25px';
		document.getElementById('list-6').style.opacity = '1';
		document.getElementById('list-6').style.pointerEvents = 'auto';
		document.getElementById('list-6').style.visibility = 'visible';
		document.getElementById('open-6').style.transform = 'rotate(225deg)';
		open6 = !open6;
	}else{
		document.getElementById('list-6').style.height = '0';
		document.getElementById('list-6').style.padding = '0';
		document.getElementById('list-6').style.opacity = '0';
		document.getElementById('list-6').style.pointerEvents = 'none';
		document.getElementById('list-6').style.visibility = 'hidden';
		document.getElementById('open-6').style.transform = 'rotate(0deg)';
		open6 = !open6;
	}

}

let open7 = false;


document.getElementById('services-7').onclick = function() {

	if(!open7){
		document.getElementById('list-7').style.height = 'auto';
		document.getElementById('list-7').style.padding = '30px 25px';
		document.getElementById('list-7').style.opacity = '1';
		document.getElementById('list-7').style.pointerEvents = 'auto';
		document.getElementById('list-7').style.visibility = 'visible';
		document.getElementById('open-7').style.transform = 'rotate(225deg)';
		open7 = !open7;
	}else{
		document.getElementById('list-7').style.height = '0';
		document.getElementById('list-7').style.padding = '0';
		document.getElementById('list-7').style.opacity = '0';
		document.getElementById('list-7').style.pointerEvents = 'none';
		document.getElementById('list-7').style.visibility = 'hidden';
		document.getElementById('open-7').style.transform = 'rotate(0deg)';
		open7 = !open7;
	}

}

let open8 = false;


document.getElementById('services-8').onclick = function() {

	if(!open8){
		document.getElementById('list-8').style.height = 'auto';
		document.getElementById('list-8').style.padding = '30px 25px';
		document.getElementById('list-8').style.opacity = '1';
		document.getElementById('list-8').style.pointerEvents = 'auto';
		document.getElementById('list-8').style.visibility = 'visible';
		document.getElementById('open-8').style.transform = 'rotate(225deg)';
		open8 = !open8;
	}else{
		document.getElementById('list-8').style.height = '0';
		document.getElementById('list-8').style.padding = '0';
		document.getElementById('list-8').style.opacity = '0';
		document.getElementById('list-8').style.pointerEvents = 'none';
		document.getElementById('list-8').style.visibility = 'hidden';
		document.getElementById('open-8').style.transform = 'rotate(0deg)';
		open8 = !open8;
	}

}

let open9 = false;


document.getElementById('services-9').onclick = function() {

	if(!open9){
		document.getElementById('list-9').style.height = 'auto';
		document.getElementById('list-9').style.padding = '30px 25px';
		document.getElementById('list-9').style.opacity = '1';
		document.getElementById('list-9').style.pointerEvents = 'auto';
		document.getElementById('list-9').style.visibility = 'visible';
		document.getElementById('open-9').style.transform = 'rotate(225deg)';
		open9 = !open9;
	}else{
		document.getElementById('list-9').style.height = '0';
		document.getElementById('list-9').style.padding = '0';
		document.getElementById('list-9').style.opacity = '0';
		document.getElementById('list-9').style.pointerEvents = 'none';
		document.getElementById('list-9').style.visibility = 'hidden';
		document.getElementById('open-9').style.transform = 'rotate(0deg)';
		open9 = !open9;
	}

}

