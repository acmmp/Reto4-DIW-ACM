document.querySelector('.desple').addEventListener('click', (e) =>{
const X = document.querySelectorAll('.navbarImg')
	if(e.target.classList.contains('navbarImg')){
		if(X[0].style.opacity !== '0'){
			X[0].style.opacity = '0';
			X[1].style.opacity = '1';
		}else{
			X[0].style.opacity = '1';
			X[1].style.opacity = '0';
		}
		document.querySelector('.menuDesplegable').classList.toggle('menuDesplegable2')
		document.querySelector('.menuContenedor').classList.toggle('menuDesplegable2')
	}
})
