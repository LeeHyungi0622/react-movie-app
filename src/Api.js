import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "06e43891a2b919ee11ba3f3894d63374",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => axiosInstance.get("movie/now_playing"),
    upcoming: () => axiosInstance.get("movie/upcoming"),
    popular: () => axiosInstance.get("movie/popular"),
    movieDetail: (id) => axiosInstance.get(`movie/${id}`, {
        append_to_response: "videos"
    }),
    search: (term) => axiosInstance.get("search/movie", {
        query: term
    })
};

export const tvApi = {
    topRated: () => axiosInstance.get("tv/top_rated"),
    popular: () => axiosInstance.get("tv/popular"),
    airingToday: () => axiosInstance.get("tv/airing_today"),
    showDetail: (id) => axiosInstance.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => axiosInstance.get("search/tv", {
        params: {
            query: term
        }
    })
};