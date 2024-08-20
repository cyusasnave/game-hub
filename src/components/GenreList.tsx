import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <ul>{data && data.map((genre) => <li key={genre.id}>{genre.name}</li>)}</ul>
  );
};

export default GenreList;
