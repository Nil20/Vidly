import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "637dd33b5057d14f000b73ec",
    title: "Die Hard",
    genre: { _id: "637dd33b5057d14f000b73ec", name: "Action" },
    numberInStock: 30,
    dailyRentalRate: 12.468004319816828,
    publishDate: "1992-06-14T00:00:00.000Z",
    liked: "true",
  },
  {
    _id: "637dd33b5057d14f000b73ed",
    title: "Click",
    genre: { _id: "637dd33b5057d14f000b73ed", name: "Comedy" },
    numberInStock: 28,
    dailyRentalRate: 82.21571566537023,
    publishDate: "2007-02-02T00:00:00.000Z",
  },
  {
    _id: "637dd33b5057d14f000b73f1",
    title: "Terminator",
    genre: { _id: "637dd33b5057d14f000b73f1", name: "Action" },
    numberInStock: 23,
    dailyRentalRate: 83.13037627376616,
    publishDate: "2003-12-29T00:00:00.000Z",
  },
  {
    _id: "637dd33b5057d14f000b73f0",
    title: "Fast & Furious",
    genre: { _id: "637dd33b5057d14f000b73f0", name: "Action" },
    numberInStock: 22,
    dailyRentalRate: 36.45676705054939,
    publishDate: "2006-11-04T00:00:00.000Z",
  },
  {
    _id: "637dd33b5057d14f000b73ee",
    title: "Prestige",
    genre: { _id: "637dd33b5057d14f000b73ee", name: "Thriller" },
    numberInStock: 20,
    dailyRentalRate: 69.21727266162634,
    publishDate: "1973-02-25T00:00:00.000Z",
  },
  {
    _id: "637dd33b5057d14f000b73ef",
    title: "Se7en",
    genre: { _id: "637dd33b5057d14f000b73ef", name: "Thriller" },
    numberInStock: 14,
    dailyRentalRate: 74.46123033296317,
    publishDate: "2014-06-29T00:00:00.000Z",
  },
  {
    _id: "637dd33b5057d14f000b73eb",
    title: "Avatar",
    genre: { _id: "637dd33b5057d14f000b73eb", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 3.482537157833576,
    publishDate: "2008-09-04T00:00:00.000Z",
  },
  {
    _id: "637dd33b5057d14f000b73f3",
    title: "Bruce Almighty",
    genre: { _id: "637dd33b5057d14f000b73f3", name: "Comedy" },
    numberInStock: 2,
    dailyRentalRate: 70.02329474780709,
    publishDate: "2012-05-03T00:00:00.000Z",
  },
  {
    _id: "637dd33b5057d14f000b73f2",
    title: "The Dark Knight",
    genre: { _id: "637dd33b5057d14f000b73f2", name: "Action" },
    numberInStock: 1,
    dailyRentalRate: 53.065143804997206,
    publishDate: "1989-11-25T00:00:00.000Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
