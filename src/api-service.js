//FROM RAPID API FOR CODE SNIPPET below to search by title!
export default class FindShow {
  static async searchShow(titleQuery) {
    const url = `https://streaming-availability.p.rapidapi.com/search/title?country=us&title=${titleQuery}&output_language=en&show_type=all`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const jsonifyResponse = await response.json();
      if (!response.ok) {
        const errorMsg = `${response.status} ${response.statusText} ${jsonifyResponse.message}`;
        throw new Error(errorMsg);
      }
      // console.log(response);
      return jsonifyResponse;
    } catch (error) {
      // console.error(error);
      return error;
    }
  }
}
// 		const url = `https://streaming-availability.p.rapidapi.com/search/title?country=us&title=${titleQuery}&output_language=en&show_type=all`;
// 		const options = {
// 			method: 'GET',
// 			headers: {
// 				'X-RapidAPI-Key': `${process.env.API_KEY}`,
// 				'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
// 			},
// 		};

// 		try {
// 			const response = await fetch(url, options);
// 			const result = await response.text();
// 			console.log(result);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
