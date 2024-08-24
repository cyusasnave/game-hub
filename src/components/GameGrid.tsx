import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, data, isLoading, hasNextPage, fetchNextPage } =
    useGames();

  if (error) return <Text>{error.message}</Text>;

  const totalPageCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={totalPageCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          Array.from({ length: 9 }).map((_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data &&
          data.pages.map((games) =>
            games.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))
          )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
