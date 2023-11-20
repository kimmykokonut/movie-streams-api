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
      console.log(response);
      const jsonifyResponse = await response.json();
      console.log(jsonifyResponse);
      if (!response.ok) {
        const errorMsg = `${response.status} ${response.statusText} ${jsonifyResponse.message}`;
        throw new Error(errorMsg);
      }
      return jsonifyResponse;
    } catch (error) {
      return error;
    }
  }
}