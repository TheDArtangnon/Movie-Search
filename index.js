// GRABBING ELEMENTS FROM HTML
const moviesWrapper = document.querySelector('.movies');
const searchName = document.querySelector('.search__name');

// GLOBAL MOVIE VARIABLE
let currentMovies = []

// HANDLING THE SEARCH
function searchChange(event) {
    renderMovies(event.target.value);
    searchName.innerHTML = event.target.value;
}

// RENDERING MOVIES / CALLING API
async function renderMovies(searchTerm) {
 const response = await fetch(`https://omdbapi.com/?s=${searchTerm}&apikey=3be48169`);
 const data = await response.json();
 currentMovies = data.Search;
 displayMovies(currentMovies);
}


// DISPLAYING MOVIES
function displayMovies(movieList) {
moviesWrapper.innerHTML = movieList.map((movie) => {
    return `
    <div class="movie">
    <figure class="img__Wrapper">
        <img class="image" src="${movie.Poster}" alt="">
        </figure>
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button class="learn__btn">Learn More</button>
</div>
    `
})
.join("");
}

// FILTERING MOVIES
function filterMovies(event) {
const filterOption = event.target.value;

let filteredMovies = [...currentMovies];

if (filterOption === "newest") {
    filteredMovies.sort((a, b) => b.Year - a.Year);
    } 
else if (filterOption === "oldest") {
    filteredMovies.sort((a, b) => a.Year - b.Year);
}

displayMovies(filteredMovies);
}