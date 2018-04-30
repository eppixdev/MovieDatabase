// Init MovieDB
const movieDatabase = new MovieDatabase;

const ui = new UI;

movieDatabase.getMovie()
  .then(data => {
    console.log(data.movie.title);
    console.log(data.movie.tagline);
    console.log(data.movie.overview);
    console.log(data.movie.release_date);
    console.log(data.movie.runtime);
    console.log(data.movie.revenue);
    ui.showProfile();
  })
