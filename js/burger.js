document.querySelector('.header-burger').onclick = function () {
	
	document.querySelector('.menu__home').style.width = '75%';
	document.querySelector('.menu__home').style.opacity = '1';
	document.querySelector('.menu__home').style.pointerEvents = 'auto';
	document.querySelector('.menu-mobile').style.opacity = '1';
	document.querySelector('.menu-mobile').style.pointerEvents = 'auto';
	document.querySelector('.body__black').style.opacity = '1';
	document.querySelector('.body__black').style.pointerEvents = 'auto';
	document.querySelector('header.header').style.zIndex = '700';
}

function close(elem){
	elem.style.width = '0';
	elem.style.opacity = '0';
	elem.style.pointerEvents = 'none';
	document.querySelector('.menu-mobile').style.opacity = '0';
	document.querySelector('.menu-mobile').style.pointerEvents = 'none';
	document.querySelector('.body__black').style.opacity = '0';
	document.querySelector('.body__black').style.pointerEvents = 'none';
	document.querySelector('header.header').style.zIndex = '1000';
}


document.getElementById('home-close').onclick = function () {
	close(document.querySelector('.menu__home'));
}

const openCard = document.querySelectorAll('.open-card');
const closeCard = document.querySelectorAll('.close-drop')

document.querySelector('.menu__home').addEventListener('click', (event) => {
	let target = event.target;

	for (var i = openCard.length - 1; i >= 0; i--) {

		if (target == openCard[i]) {
			let menuDrop = openCard[i].parentNode.querySelector('.menu__drop');

			openCard[i].closest('.menu__list-text').id = 'active';

			openCard[i].style.opacity = '0';
			openCard[i].style.pointerEvents = '0';
			openCard[i].style.height = '0';
			openCard[i].style.padding = '0';

			document.querySelector('.menu__home').style.backgroundColor = 'transparent';
			document.querySelector('.menu__languages').style.color = 'white';


			let listText = openCard[i].parentNode.parentNode.querySelectorAll('.menu__list-text');

			document.querySelector('.menu__list').style.background = 'transparent';
			document.querySelector('.menu__list').style.borderRadius = '0';

			let homeListText = openCard[i].parentNode.parentNode.parentNode.querySelectorAll('.menu__home_list-text');

			for (var text = homeListText.length - 1; text >= 0; text--) {
				homeListText[text].style.height = 0;
				homeListText[text].style.opacity = 0;
				homeListText[text].classList.remove('blue-arrow');
			}
			

			for (var j = listText.length - 1; j >= 0; j--) {
				if(listText[j].id !== 'active'){
					listText[j].style.opacity = 0;
					listText[j].style.height = 0;
					listText[j].style.pointerEvents = "none";
				}


					listText[j].classList.remove('white-arrow');
			}

				menuDrop.style.opacity = '1';
				menuDrop.style.pointerEvents = 'auto';
				menuDrop.style.height = 'auto';
				menuDrop.style.padding = '20px';
		}

	}

	for (var elem = closeCard.length - 1; elem >= 0; elem--) {

		if (target == closeCard[elem]) {
			let menuDrop = closeCard[elem].parentNode;

			let title = closeCard[elem].closest('#active');
			title.id = '';

			closeCard[elem].parentNode.parentNode.querySelector('.open-card').style.opacity = '1';
			closeCard[elem].parentNode.parentNode.querySelector('.open-card').style.pointerEvents = 'auto';
			closeCard[elem].parentNode.parentNode.querySelector('.open-card').style.height = 'auto';
			closeCard[elem].parentNode.parentNode.querySelector('.open-card').style.padding = '0';

			document.querySelector('.menu__home').style.backgroundColor = 'white';
			document.querySelector('.menu__languages').style.color = 'black';


			let listText = openCard[elem].parentNode.parentNode.parentNode.querySelectorAll('.menu__list-text');

			document.querySelector('.menu__list').style.background = '#006CAE';
			document.querySelector('.menu__list').style.borderRadius = '5px';

			let homeListText = document.querySelectorAll('.menu__home_list-text');

			for (var text = homeListText.length - 1; text >= 0; text--) {
				homeListText[text].style.opacity = 1;
				homeListText[text].style.height = 'auto';
				homeListText[text].classList.add('blue-arrow');
			}
			

			for (var j = listText.length - 1; j >= 0; j--) {
				if(listText[j].id !== 'active'){
					listText[j].style.opacity = 1;
					listText[j].style.height = 'auto';
					listText[j].style.pointerEvents = "auto";
					
				}

				listText[j].classList.add('white-arrow');
			}

				menuDrop.style.opacity = '0';
				menuDrop.style.pointerEvents = 'none';
				menuDrop.style.height = '0';
				menuDrop.style.padding = '0';
		}

	}



})

const openCardService = document.querySelectorAll('.open-card-services');
const closeCardService = document.querySelectorAll('.close-services')

document.querySelector('.menu__home').addEventListener('click', (event) => {
	let target = event.target;

	for (var i = openCardService.length - 1; i >= 0; i--) {

		if (target == openCardService[i]) {
			let menuDrop = openCardService[i].parentNode.querySelector('.menu__services');

			openCardService[i].closest('.menu__list-text').id = 'active';

			openCardService[i].style.opacity = '0';
			openCardService[i].style.pointerEvents = '0';
			openCardService[i].style.height = '0';
			openCardService[i].style.padding = '0';


			let listText = openCardService[i].parentNode.parentNode.querySelectorAll('.menu__list-text');

			openCardService[i].parentNode.parentNode.style.background = 'transparent';
			openCardService[i].parentNode.parentNode.style.borderRadius = '0';


			let homeListText = openCardService[i].parentNode.parentNode.parentNode.querySelectorAll('.menu__home_list-text');

			for (var text = homeListText.length - 1; text >= 0; text--) {
				homeListText[text].style.height = 0;
				homeListText[text].style.opacity = 0;
				homeListText[text].classList.remove('blue-arrow');
			}
			

			for (var j = listText.length - 1; j >= 0; j--) {
				if(listText[j].id !== 'active'){
					listText[j].style.opacity = 0;
					listText[j].style.height = 0;
					listText[j].style.pointerEvents = "none";
				}


					listText[j].classList.remove('white-arrow');
			}

				menuDrop.style.opacity = '1';
				menuDrop.style.pointerEvents = 'auto';
				menuDrop.style.height = 'auto';
				menuDrop.style.padding = '20px';
		}

	} 

	for (var elem = closeCardService.length - 1; elem >= 0; elem--) {

		if (target == closeCardService[elem]) {
			let menuDrop = closeCardService[elem].parentNode;

			let title = closeCardService[elem].closest('#active');
			title.id = '';

			console.log(closeCardService[elem].parentNode.parentNode)

			closeCardService[elem].parentNode.parentNode.querySelector('.open-card-services').style.opacity = '1';
			closeCardService[elem].parentNode.parentNode.querySelector('.open-card-services').style.pointerEvents = 'auto';
			closeCardService[elem].parentNode.parentNode.querySelector('.open-card-services').style.height = 'auto';
			closeCardService[elem].parentNode.parentNode.querySelector('.open-card-services').style.padding = '0';

			document.querySelector('.menu__home').style.backgroundColor = 'white';
			document.querySelector('.menu__languages').style.color = 'black';


			let listText = openCardService[elem].parentNode.parentNode.parentNode.querySelectorAll('.menu__list-text');

			closeCardService[elem].parentNode.parentNode.parentNode.style.background = '#006CAE';
			closeCardService[elem].parentNode.parentNode.parentNode.style.borderRadius = '5px';

			let homeListText = document.querySelectorAll('.menu__home_list-text');

			for (var text = homeListText.length - 1; text >= 0; text--) {
				homeListText[text].style.opacity = 1;
				homeListText[text].style.height = 'auto';
				homeListText[text].classList.add('blue-arrow');
			}
			

			for (var j = listText.length - 1; j >= 0; j--) {
				if(listText[j].id !== 'active'){
					listText[j].style.opacity = 1;
					listText[j].style.height = 'auto';
					listText[j].style.pointerEvents = "auto";
					
				}

				listText[j].classList.add('white-arrow');
			}

				menuDrop.style.opacity = '0';
				menuDrop.style.pointerEvents = 'none';
				menuDrop.style.height = '0';
				menuDrop.style.padding = '0';
		}

	}



})

document.getElementById('calc-close').onclick = function () {
	close(document.querySelector('.menu__home'));
}

function open(openElem, closeElem){
	closeElem.style.opacity = '0';
	closeElem.style.width = '0%';
	closeElem.style.pointerEvents = 'none';
	openElem.style.pointerEvents = 'auto';
	openElem.style.width = '75%';
	openElem.style.opacity = '1';
}

const openBlock = document.querySelectorAll('.open');

document.querySelector('.menu__home').addEventListener('click', (event) => {
	let target = event.target;

	for (var i = openBlock.length - 1; i >= 0; i--) {
		if (target == openBlock[i] && 'active' == openBlock[i].nextElementSibling.id) {
			openTo = openBlock[i].nextElementSibling;
			openTo.style.height = '0';
			openTo.style.opacity = '0';
			openTo.style.padding = '0';
			openTo.style.pointerEvents = 'none';
			openTo.removeAttribute('id')
		}else if(target == openBlock[i] && 'active' !== openBlock[i].nextElementSibling.id){
			openTo = openBlock[i].nextElementSibling;
			openTo.style.height = 'auto';
			openTo.style.opacity = '1';
			openTo.style.padding = '10px 5px';
			openTo.style.pointerEvents = 'auto';
			openTo.id = 'active';
		}
	}

})



document.getElementById('open-thank').onclick = function (event){

	event.preventDefault();
	
	document.querySelector('.popup-callback-thank').style.height = 'auto';
	document.querySelector('.popup-callback-thank').style.opacity = '1';
	document.querySelector('.popup-callback-thank').style.pointerEvents = 'auto';
}


