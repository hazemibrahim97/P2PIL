

var app = {
	isLoading: true,
	visibleCards: {},
	selectedCities: [],
	spinner: document.querySelector('.loader'),
	cardTemplate: document.querySelector('.cardTemplate'),
	container: document.querySelector('.main'),
	addDialog: document.querySelector('.dialog-container'),
};

document.getElementById('loginButton').addEventListener('click', function() {
	showLoginDialog(true);
});

document.getElementById('signUpButton').addEventListener('click', function() {


});


function showLoginDialog(visible) {
	if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
}