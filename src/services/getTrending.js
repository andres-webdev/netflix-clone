import API_FETCH from "./config/apiFecth";

export const getTrending = async ({ page = 1 }) => {

  try {
    const response = await API_FETCH.get(`/trending/all/week?api_key=${process.env.REACT_APP_KEY_API}&page=${page}`)
    const data = await response.data.results

    return data.map(film => ({
      id: film.id,
      backdrop_path: film.backdrop_path,
      title: film.title || film.name,
      original_language: film.original_language,
      original_title: film.original_title || film.original_name,
      overview: film.overview,
      poster_path: film.poster_path,
      media_type: film.media_type,
      release_date: film.release_date || film.first_air_date,
      genre_ids: film.genre_ids,
      popularity: film.popularity,
      user_rating: '',
      favorite: false,
    }))

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export default getTrending