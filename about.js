console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form Submitted Successfully!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function cheetahImg(){
	alert('Careful I Bite!')
}


