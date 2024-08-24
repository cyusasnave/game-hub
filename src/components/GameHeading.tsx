import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindById from "../hooks/useFindById";
import useGenre, { Genre } from "../hooks/useGenre";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const genre = useFindById<Genre>(genres, gameQuery.genreId);
  const platform = useFindById<Platform>(platforms, gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
