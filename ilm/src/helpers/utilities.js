
export const makeCallToDatabase = (API) => {
	return fetch(API)
		.then(response => response.json())
		.catch(error => {
			console.log(error);
		})
};