import { Box } from "@chakra-ui/react";
import useMeetings from "../hooks/useMeetings";

const MeetingCardHeader = () => {
    const {data} = useMeetings()
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {data?.results.map((title) => (
        <h1>{title.day}</h1>
      ))}
    </Box>
  );
};

export default MeetingCardHeader;