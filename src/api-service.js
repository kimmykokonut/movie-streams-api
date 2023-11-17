//FROM RAPID API FOR CODE SNIPPET below to search by title!
export default class FindShow {
	static async searchShow() {
		const url = 'https://streaming-availability.p.rapidapi.com/search/title?country=us&title=Batman&output_language=en&show_type=all';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': `${process.env.API_KEY}`,
				'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
			},
		};

		try {
			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}
}
