// Init MovieDB
const movieDatabase = new MovieDatabase;

// Init UI
const ui = new UI;

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
          ui.showProfile(data.movie);
          console.log(data.movie);
        })
    })
})