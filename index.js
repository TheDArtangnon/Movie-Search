const moviesWrapper = document.querySelector('.movies');
console.log(moviesWrapper)

function searchChange(event) {
    console.log(event.target.value);
}



async function renderMovies() {
 const response = await fetch(`https://omdbapi.com/?s=batman&apikey=3be48169`);
 const data = await response.json();
 const moviesArr = data.Search;

}

setTimeout(() => {
    renderMovies();
});
    
