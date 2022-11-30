export const genres = [
    { _id: "727dd33b5057d14f000b73ed", name: "Action" },
    { _id: "837dd33b5057d14f000b73ed", name: "Comedy" },
    { _id: "127dd33b5057d14f000b73ed", name: "Thriller" }
];

export function getGenres() {
    return genres.filter(g => g);
}