function setup() {
    let api_key = "49c34f6afc0f7fbb3c17e344b1abb335";
    let url = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=" + api_key;
    get_movies(url);
}

function get_movies(url) {
    axios.get(url)
    .then((response) => {
        let movies = response.data.results;
        //console.log(movies);
        let output = '';
        let poster = "https://image.tmdb.org/t/p/w500/"
        $.each(movies, (index, movie) => {
            output += `
            <div class="card" style="width: 18rem;">
            <img
              src="${poster}${movie.poster_path}"
              class="card-img-top" style="height: 25rem;
              alt="${movie.title} Movie Poster"
            />
          </div>`;
        });

        $('#movies').html(output);
    })

    .catch((err) => {
        console.log(err);
    });
}