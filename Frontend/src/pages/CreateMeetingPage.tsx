import {  Grid, GridItem } from "@chakra-ui/react";
import FooterNavigation from "../components/FooterNavigation";


import "./App.css";
import CreateMeetingForm from "../components/CreateMeetingForm";

const HomePage: React.FC = () => {
  return (
    <Grid
  templateAreas={`"header"
                  "main"
                  "footer"`}
  gridTemplateRows={'300px 1fr 50px'}
    className="createMeetingGrid"
>
  <GridItem area={'header'} >
      <h2 className="createMeetingHeading">Fyll i</h2>
    </GridItem>

  <GridItem area={"main"} >
    <CreateMeetingForm />
  </GridItem>

  <GridItem area={'footer'}>
  <FooterNavigation />
  </GridItem>

</Grid>
      
  );
};

export default HomePage;