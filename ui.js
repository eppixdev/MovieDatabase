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
        <p class="release-date">${movie.release_date}</p>
        <p>Runtime: ${movie.runtime} minutes</p>
        <p>Budget: $${budget}</p>
        <p>Revenue: $${revenue}</p>
      </div>
    `;
  }
}
    