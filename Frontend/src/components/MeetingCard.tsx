import { Box, Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import Meeting from "../entities/Meeting";
import JoinMeetingButton from "./JoinMeetingButton";


interface Props {
  meeting: Meeting;
}


const MeetingCard = ( { meeting }: Props) => {
  return (
    <Card className="cardComponenet" shadow={'none'}>
      <Box className="cardContainer">
        <CardBody>
          <Heading fontSize="2xl" className="meetingCardHeading">
            {meeting.name}
          </Heading>
          <HStack>
            <Text className="meetingCardDay">
              {meeting.day === 'mon' ? 'Måndag' : ''}
            </Text>
            <Text className="meetingCardTime">{meeting.time}</Text>
          </HStack>
          <Text className="meetingCardText">{meeting.location}</Text>
          <JoinMeetingButton />
        </CardBody>
      </Box>
    </Card>
  );
};

export default MeetingCard;
