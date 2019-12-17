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
            <div class="card" style="width: 18.99rem;">
            <a onclick="movie_onClick('${movie.id}')" class=btn btn-primary href="#">
            <img
              src="${poster}${movie.poster_path}"
              class="card-img-top" style="height: 25rem;
              alt="${movie.title} Movie Poster"
            />
            </a>
          </div>`;
        });

        $('#movies').html(output);
    })

    .catch((err) => {
        console.log(err);
    });
}

function movie_onClick(id) {
    console.log(id);

    axios.get("https://api.themoviedb.org/3/movie/"
            + id
            + "?api_key=49c34f6afc0f7fbb3c17e344b1abb335&language=en-US")
    .then((response) => {
        let movie = response.data
        console.log(movie);
        let poster = "https://image.tmdb.org/t/p/w500/";
        let output = `
        <div class="col-md-4">
            <div class="card" style="width:25rem; height:40rem;">
                <img
                src="${poster}${movie.poster_path}"
                class="card-img-top"
                alt="${movie.title} Movie Poster"
                />
            </div>
        </div>

        <div class="col-md-8">
            <h2>${movie.title}</h2>
            <ul class="list-group">
                <li class="list-group-item"><strong>Rating:</strong> ${movie.vote_average}</li>
                <li class="list-group-item"><strong>Plot:</strong> ${movie.overview}</li>
                <li class="list-group-item"><strong>Release Date:</strong> ${movie.release_date}</li>
                <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime}</li>
                <li class="list-group-item"><strong>Budget:</strong> ${movie.budget}</li>
		<a href="index.html"
		<button type "button" class= "btn btn-primary" button style = "color:white;background-color:black">Back</button>

		</a>

            </ul>
        </div>
        `;
        $('#movies').html(output);
    })

    .catch((err) => {
        console.log(err);
    });
}

