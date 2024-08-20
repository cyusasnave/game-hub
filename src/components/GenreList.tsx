import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres && genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default GenreList;
