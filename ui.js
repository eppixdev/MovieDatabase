class UI { 
  constructor() {
    this.profile = document.getElementById('movieProfile');
  }

  showProfile(movie) {
    const budget = movie.budget.toLocaleString(),
          revenue = movie.revenue.toLocaleString();
    this.profile.innerHTML = `
    <div class="wrapper">
      <div class"box a">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
      </div>
    
      <div class="box b">
        <h1><a href="${movie.homepage}">${movie.title}</a></h1>
        <p class="tagline text-success">${movie.tagline}</p>
        <p class="overview">${movie.overview}</p>
        <p><h5 class="text-success">Release Date:</h5>${movie.release_date}</p>
        <p><h5 class="text-success">Runtime:</h5> ${movie.runtime} minutes</p>
        <p><h5 class="text-success">Budget:</h5> $${budget}</p>
        <p><h5 class="text-success">Revenue:</h5> $${revenue}</p>
      </div>
    `;
  }
}
    