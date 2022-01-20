import { getAxios, IRes } from './fetch';

const getAllMovies = (): Promise<IRes<any>> => {
  return getAxios({
    url: '/24i/smartapps-test/main/data.json',
  });
};

const MoviesApi = { getAllMovies };

export default MoviesApi;
