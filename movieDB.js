class MovieDatabase {
  constructor() {
    this.apiKey = 'a5fd48a05497bb21e69e61b0c54a7fad';
  }

  async searchMovie(searchQuery) {
    const movieSearch = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchQuery}`);

    const movie = await movieSearch.json();

    return {
      movie
    }
  }

  async getMovie(id) {
    const movieProfile = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`);

    const movie = await movieProfile.json();

    return {
      movie
    }
  }
}