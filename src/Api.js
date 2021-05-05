import axios from 'axios';

// axios mockup 테스트를 위해서 axios.create를 이용해서 인스턴스를 사용하면 안된다.
// axios-mock-adapter를 사용하면 가능
// axios 인스턴스 생성
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
    toRated: () => axiosInstance.get("tv/top_rated"),
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