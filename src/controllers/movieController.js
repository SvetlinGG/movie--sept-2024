import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create',async (req, res) => {
    const movieData = req.body;
    
    await movieService.create(movieData)
    res.redirect('/');
});


router.get('/search', async (req, res) => {
    const query = req.query;
    const movies = await movieService.getAll(query);
    
    res.render('home', {isSearch: true, movies});
});

router.get('/:movieId/details', async(req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    movie.ratingView = getRatingViewData(movie.rating);

    res.render('movies/details', { movie });
});

function getRatingViewData(rating){
    if(!Number.isInteger(rating)){
        return 'n\\a';
    }

    return '&#x2605;'.repeat(rating)
};

export default router;
