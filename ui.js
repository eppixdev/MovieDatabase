class UI {
  constructor() {
    this.movie = document.getElementById('movieProfile');
  }

  showProfile(movie) {
    this.movie.innerHTML = `
    <p>movie.title</p>
    `;
  }
}