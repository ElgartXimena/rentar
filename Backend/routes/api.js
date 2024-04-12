//sample code for creating RESTapi endpoints

import { Router } from 'express'

import { createMovie, updateMovie, deleteMovie, getMovieById, getMovies } from '../controllers/sample-ctrl'

const router = Router()

router.post('/movie', createMovie)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)
router.get('/movie/:id', getMovieById)
router.get('/movies', getMovies)

export default router