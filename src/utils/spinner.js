export const showSpinner = () => {
	const spinner = document.querySelector('#spinner');
	spinner.classList.remove('d-none');
};

export const hideSpinner = () => {
	const spinner = document.querySelector('#spinner');
	spinner.classList.add('d-none');
};
