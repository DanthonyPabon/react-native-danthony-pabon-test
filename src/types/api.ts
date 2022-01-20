export interface IMovies {
  id: number;
  title: string;
  year: string;
  duration: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

export interface ICarousel {
  title: string;
  items: IMovies[];
}
