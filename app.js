// Init MovieDB
const movieDatabase = new MovieDatabase;

// Search input
const searchMovie = document.getElementById('searchMovie');

// Search input event listener
searchMovie.addEventListener('keyup', (e) => {
  const movieText = e.target.value;

  movieDatabase.searchMovie(movieText)
    .then(data => {
      const movieID = data.movie.results[0].id
      return movieDatabase.getMovie(movieID)
        .then(data => {
          console.log(data);
          const movieProfile = document.getElementById('movieProfile');
          movieProfile.innerHTML = `<h1>${data.movie.title}</h1>
          <p>${data.movie.tagline}</p>
          <p>${data.movie.release_date}`;
        })
    })
})