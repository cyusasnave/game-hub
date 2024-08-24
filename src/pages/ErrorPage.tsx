import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading as={"h1"}>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist!"
            : "Sorry, Unexpected error!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
