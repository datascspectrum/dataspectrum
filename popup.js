const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validarForm);				
function validarForm(e) {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	if (name === '' || email === '' || message === '') {
		const msg = document.getElementById('msg');
		msg.textContent = 'All fields are required';
	} else {
		formulario.submit();
		formulario.reset();                       
		alert('Thanks for contact me, I would reply as soon as possible');
	}
}
