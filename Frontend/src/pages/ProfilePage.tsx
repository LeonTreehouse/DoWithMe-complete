import { Grid, GridItem } from "@chakra-ui/react";
import ProfileHeading from "../components/ProfileHeading";
import FooterNavigation from "../components/FooterNavigation";
import ProfileCard from "../components/ProfileCard";


const ProfilePage = () => {

    return (
      <Grid
        templateAreas={`"header"
                        "main"
                        "footer"`}
        gridTemplateRows={"60px 1fr 50px"}
        className="profilePageGrid"
      >
        <GridItem area={"header"}>
          <ProfileHeading />
        </GridItem>
        <GridItem area={"main"}>
          <ProfileCard />
        </GridItem>
        <GridItem area={"footer"}>
          <FooterNavigation />
        </GridItem>
      </Grid>
    );

}

export default ProfilePage