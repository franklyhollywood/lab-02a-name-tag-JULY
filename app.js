//1. get name element:
const nameEl = document.getElementById('name');
//1.5 check to see if we grabbed the proper element:
console.log(nameEl);

//2. get button element:
const buttonEl = document.getElementById('changeName');
//2.5 check to make sure that we grabbed the button:
console.log(buttonEl);

//3 add magic button event listener:
buttonEl.addEventListener('click', () => {
	//3 Grab the text input:
	const inputEl = document.getElementById('input');
	//3.5 make sure that we have the users input text
	console.log(inputEl.value);

	// cool zone -- this is where stuff happens after we click
	// post-click logic goes here!
	// 3) mutate whatever properties we want
	nameEl.textContent = inputEl.value;
});
