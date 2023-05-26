import { Avatar, Box, Card, CardBody, Heading, WrapItem, Text, Button } from "@chakra-ui/react";
import {MdBuild} from "react-icons/md"
import avatar from './../assets/avatar.png'

const ProfileCard = () => {
    return (
      <Card className="cardComponenet" shadow={"none"}>
        <Box className="profileCardContainer">
          <CardBody>
            <Heading fontSize="2xl" className="profileCardHeading">
              Joel Forsberg
            </Heading>
            <WrapItem className="profileAvatar">
              <Avatar bg="blue.500" size={"lg"} src={avatar} />
            </WrapItem>
            <Text className="profileAge">Ålder: 34</Text>
            <Text className="profileCity">Stad: Göteborg</Text>
            <Text className="profileIntrests">
              Intressen: Sport och träning
            </Text>
            <Box className="profileBodyContainer">
              <Text className="profileBodyText">
                Jag är en sportintresserad person som gillar att röra på mig.
                Att träna är en stor del av mitt liv och jag älskar att utmana
                mig själv och bli bättre. Jag söker efter likasinnade personer
                att umgås med och kanske även träna tillsammans med ibland. Att
                ha någon att bolla idéer med och kanske även upptäcka nya
                sporter och aktiviteter vore roligt.
              </Text>
            </Box>
            <Button
              leftIcon={<MdBuild />}
              colorScheme="gray"
              variant="solid"
              className="profileSettingsButton"
            >
              Redigera
            </Button>
          </CardBody>
        </Box>
      </Card>
    );
}

export default ProfileCard