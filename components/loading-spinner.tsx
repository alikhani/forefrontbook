import { Spinner, Center } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Center display="flex" width="100%" height="100%">
      <Spinner size="xl" />
    </Center>
  );
};
