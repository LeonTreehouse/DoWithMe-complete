import { Grid, GridItem } from "@chakra-ui/react";
import CreateMeetingNavigation from "../components/CreateMeetingNavigation";
import FooterNavigation from "../components/FooterNavigation";
import MeetingGrid from "../components/MeetingGrid";
import MeetingHeading from "../components/MeetingHeading";
import "./App.css";
import CreatedMeetings from "../components/CreatedMeetings";
import { useLocation } from "react-router-dom";
  
const HomePage: React.FC = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const title = formData?.title || "";
  const place = formData?.place || '';
  const day = formData?.day || '';
  const description = formData?.description || '';


  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "new"
                  "create"
                  "footer"`}
      gridTemplateRows={"50px 1fr 1fr 40px 50px"}
      className="homePageGrid"
    >
      <GridItem area={"header"}>
        <MeetingHeading />
      </GridItem>
      <GridItem area={"main"}>
        <MeetingGrid />
      </GridItem>
      <GridItem area={"new"} className="createdMeetingGridItem">
        {title && place && day && description && (
          <CreatedMeetings />
        )}
      </GridItem>
      <GridItem area={"create"}>
        <CreateMeetingNavigation />
      </GridItem>
      <GridItem area={"footer"}>
        <FooterNavigation />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
