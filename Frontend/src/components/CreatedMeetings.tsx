import { useLocation } from 'react-router-dom';
import { Box, Card, CardBody, Heading, HStack, Text } from '@chakra-ui/react';

const CreatedMeetings = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const title = formData?.title || '';
  const place = formData?.place || '';
  const time = formData?.time || '';
  const day = formData?.day || '';


  return (
    <Card
      className="createdCardComponenet"
      width={"97vw"}
      paddingLeft={"0.75rem"}
      shadow={"none"}
    >
      <Box className="cardContainer">
        <CardBody>
          <Heading fontSize="2xl" className="createdMeetingCardHeading">
            {title}
          </Heading>
          <HStack>
            <Text className="createdMeetingCardDay">{day}</Text>
            <Text className="createdMeetingCardTime">{time}</Text>
          </HStack>
          <HStack>
            <Text className="createdMeetingCardPlace">{place}</Text>
          </HStack>
        </CardBody>
      </Box>
    </Card>
  );
};

export default CreatedMeetings;




