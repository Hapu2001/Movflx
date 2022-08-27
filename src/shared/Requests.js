const key = '6cd3158a79f8308025968b023f2a09cf'

const request = {
    requestMoviePopular :`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1` ,
    requestTvPopular :`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`

}

export default request