class MovieDatabase {
  constructor() {
    this.apiKey = 'a5fd48a05497bb21e69e61b0c54a7fad';
  }

  async getMovie() {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${this.apiKey}`);

    const movie = await movieResponse.json();

    return {
      movie
    }
  }
}