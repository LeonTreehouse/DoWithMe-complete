import { SimpleGrid } from "@chakra-ui/react";
import MeetingCardContainer from "./MeetingCardContainer";
import MeetingCardSkeleton from "./MeetingCardSkeleton";
import MeetingCard from "./MeetingCard";
import useMeetings from "../hooks/useMeetings";

const MeetingGrid = () => {
  const { data, error, isLoading } = useMeetings();
  const skeletons = [1, 2];

  if (error) return <p>{error.message}</p>;

  return (
    <SimpleGrid spacing={6} padding="10px">
      {isLoading &&
        skeletons.map((skeleton) => (
          <MeetingCardContainer key={skeleton}>
            <MeetingCardSkeleton />
          </MeetingCardContainer>
        ))}
      {data?.results.map((meeting) => (
        <MeetingCardContainer key={meeting.time}>
          <MeetingCard meeting={meeting} />
        </MeetingCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default MeetingGrid;


