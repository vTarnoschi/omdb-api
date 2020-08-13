import { call, takeLatest, put } from 'redux-saga/effects';

import { movieActionsCreator } from '../Redux/movieReducer';

import MovieService from '../Services/MovieService'

const movieSagaTypes = {
    MOVIE_SAGA: "MOVIE_SAGA",
}

const searchByValues = {
    TITLE: "title",
    ID: "id"
}

function* getMovie(params) {
    yield put(movieActionsCreator().getMovieRequest());
    
    try {
        let result = null;

        if (params.searchBy === searchByValues.TITLE) result = yield call(MovieService.getMovieByTitle, params.payload)
        else result = yield call(MovieService.getMovieById, params.payload)

        let payload = {};
        if (result.data.Response === "False") throw new Error(result.data.Error);
        else payload = result.data

        yield put(movieActionsCreator().getMovieSuccess(payload))
    } catch(error) {
        yield put(movieActionsCreator().getMovieError(error.message))
    }
}

export function movieSagaActionsCreator() {
    return {
        movieSagaTitle: (payload) => ({
            type: movieSagaTypes.MOVIE_SAGA,
            searchBy: searchByValues.TITLE,
            payload
        }),
        movieSagaId: (payload) => ({
            type: movieSagaTypes.MOVIE_SAGA,
            searchBy: searchByValues.ID,
            payload
        })
    }
}

export default function* movieSaga() {
    yield takeLatest(movieSagaTypes.MOVIE_SAGA, getMovie)
}