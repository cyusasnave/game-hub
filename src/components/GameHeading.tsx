import { Heading } from "@chakra-ui/react";
import useFindById from "../hooks/useFindById";
import useGenre from "../hooks/useGenre";
import Genre from "../entities/Genre";
import usePlatform from "../hooks/usePlatform";
import Platform from "../entities/Platform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();
  const { genreId, platformId } = useGameQueryStore((s) => ({
    genreId: s.gameQuery.genreId,
    platformId: s.gameQuery.platformId,
  }));

  const genre = useFindById<Genre>(genres, genreId);
  const platform = useFindById<Platform>(platforms, platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
