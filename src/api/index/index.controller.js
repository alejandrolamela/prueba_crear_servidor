const rootGet = (req, res)=> {
    res.send("Hola");
 }

 const moviesGet = (req,res)=> {
    const movies = ['avatar', 'hola'];
    res.send(movies);
}

const movieGet = (req,res)=> {
    const movieName = req.params.movie;
    const movies = ['avatar', 'hola'];
    const findMovie = movies.indexOf(movieName);
    if (findMovie === -1) {
        res.send('La peli no esta');
    } else {
        res.send(movies[findMovie]);
    }
 }

 module.exports = {
    rootGet,
    moviesGet,
    movieGet,
 }