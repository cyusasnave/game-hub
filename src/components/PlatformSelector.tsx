import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFindById from "../hooks/useFindById";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../entities/Platform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const { platformId, setPlatformId } = useGameQueryStore((s) => ({
    platformId: s.gameQuery.platformId,
    setPlatformId: s.setPlatformId,
  }));

  const selectedPlatform = useFindById<Platform>(data, platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data &&
          data.results.map((platform) => (
            <MenuItem
              onClick={() => setPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
