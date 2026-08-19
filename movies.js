const movies = [
  ["Fantastic Four (2005)", "2005", "Action"],
  ["Fantastic Four (2015)", "2015", "Action"],
  ["Fantastic Four: First Steps", "2025", "Action"],
  ["Finding Nemo", "2003", "Animation"],
  ["Ford v Ferrari", "2019", "Drama"],
  ["Forrest Gump", "1994", "Drama"],
  ["Free Guy", "2021", "Comedy"],
  ["Frozen", "2013", "Animation"],
  ["Frozen II", "2019", "Animation"],
  ["Garfield", "2004", "Family"],
  ["The Garfield Movie", "2024", "Animation"],
  ["Ghostbusters", "1984", "Comedy"],
  ["Ghostbusters II", "1989", "Comedy"],
  ["Gladiator", "2000", "Action"],
  ["Gladiator II", "2024", "Action"],
  ["Godzilla Minus One", "2023", "Sci-Fi"],
  ["Good Burger", "1997", "Comedy"],
  ["Good Burger 2", "2023", "Comedy"],
  ["GoodFellas", "1990", "Drama"],
  ["Guardians of the Galaxy", "2014", "Sci-Fi"],
  ["Guardians of the Galaxy Vol. 2", "2017", "Sci-Fi"],
  ["Guardians of the Galaxy Vol. 3", "2023", "Sci-Fi"],
  ["Home Alone", "1990", "Comedy"],
  ["Home Alone 2: Lost in New York", "1992", "Comedy"],
  ["Inside Out", "2015", "Animation"],
  ["Inside Out 2", "2024", "Animation"],
  ["Iron Man", "2008", "Action"],
  ["Iron Man 2", "2010", "Action"],
  ["Iron Man 3", "2013", "Action"],
  ["The Incredibles", "2004", "Animation"],
  ["The Incredibles 2", "2018", "Animation"],
  ["Jurassic Park", "1993", "Sci-Fi"],
  ["Jurassic World", "2015", "Sci-Fi"],
  ["Jurassic World: Fallen Kingdom", "2018", "Sci-Fi"],
  ["Jurassic World Dominion", "2022", "Sci-Fi"],
  ["Jurassic World Rebirth", "2025", "Sci-Fi"],
  ["John Wick", "2014", "Action"],
  ["John Wick: Chapter 4", "2023", "Action"],
  ["Jumanji", "1995", "Family"],
  ["KPop Demon Hunters", "2025", "Animation"],
  ["The Karate Kid", "1984", "Drama"],
  ["Karate Kid: Legends", "2025", "Action"],
  ["Kill Bill: Vol. 1", "2003", "Action"],
  ["Kill Bill: Vol. 2", "2004", "Action"],
  ["The LEGO Batman Movie", "2017", "Animation"],
  ["The LEGO Movie", "2014", "Animation"],
  ["The LEGO Movie 2", "2019", "Animation"],
  ["Lightyear", "2022", "Animation"],
  ["The Lion King", "1994", "Animation"],
  ["Luca", "2021", "Animation"],
  ["Logan", "2017", "Action"],
  ["Maleficent", "2014", "Family"],
  ["Mean Girls", "2004", "Comedy"],
  ["Minions", "2015", "Animation"],
  ["Moana", "2016", "Animation"],
  ["Moana 2", "2024", "Animation"],
  ["Mufasa: The Lion King", "2024", "Animation"],
  ["Oppenheimer", "2023", "Drama"],
  ["Pacific Rim", "2013", "Sci-Fi"],
  ["Pacific Rim: Uprising", "2018", "Sci-Fi"],
  ["The Peanuts Movie", "2015", "Animation"],
  ["Pinocchio", "1940", "Animation"],
  ["Pixels", "2015", "Comedy"],
  ["Puss in Boots: The Last Wish", "2022", "Animation"],
  ["Ratatouille", "2007", "Animation"],
  ["Real Steel", "2011", "Action"],
  ["Red One", "2024", "Comedy"],
  ["Rio", "2011", "Animation"],
  ["Rio 2", "2014", "Animation"],
  ["Rush Hour", "1998", "Comedy"],
  ["Rush Hour 2", "2001", "Comedy"],
  ["Rush Hour 3", "2007", "Comedy"],
  ["Scooby-Doo", "2002", "Comedy"],
  ["Scooby-Doo 2: Monsters Unleashed", "2004", "Comedy"],
  ["The Super Mario Bros. Movie", "2023", "Animation"],
  ["Spider-Man: Homecoming", "2017", "Action"],
  ["Spider-Man: Far From Home", "2019", "Action"],
  ["Spider-Man: No Way Home", "2021", "Action"],
  ["Space Jam: A New Legacy", "2021", "Comedy"],
  ["Superman", "2025", "Action"]
].sort((a,b) => a[0].localeCompare(b[0]));

const grid = document.querySelector("#movieGrid");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
let activeGenre = "all";

function render() {
  const term = search.value.trim().toLowerCase();
  const filtered = movies.filter(([title, year, genre]) =>
    (activeGenre === "all" || genre === activeGenre) &&
    title.toLowerCase().includes(term)
  );
  grid.innerHTML = filtered.map(([title, year, genre]) => `
    <article class="movie-card">
      <div class="poster-placeholder" aria-label="${title} poster placeholder">${title}</div>
      <div class="movie-info">
        <h3>${title}</h3>
        <p>${year} · ${genre}</p>
      </div>
    </article>
  `).join("");
  count.textContent = `${filtered.length} ${filtered.length === 1 ? "title" : "titles"}`;
  empty.hidden = filtered.length !== 0;
}

search.addEventListener("input", render);
document.querySelectorAll("[data-genre]").forEach(btn => {
  btn.addEventListener("click", () => {
    activeGenre = btn.dataset.genre;
    render();
  });
});
render();
