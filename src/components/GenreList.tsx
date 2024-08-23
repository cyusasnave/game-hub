import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data &&
          data.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={"8px"}
                  objectFit={"cover"}
                  src={getCroppedUrl(genre.image_background)}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  fontSize={"lg"}
                  variant={"link"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
