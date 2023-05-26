import { Grid, GridItem } from "@chakra-ui/react";
import CalendarHeading from "../components/CalendarHeading";
import FooterNavigation from "../components/FooterNavigation";
import CalendarArea from "../components/CalendarArea";

const CalendarPage = () => {

        return (
          <Grid
            templateAreas={`"header"
                        "main"
                        "footer"`}
            gridTemplateRows={"150px 1fr 50px"}
            className="profilePageGrid"
          >
            <GridItem area={"header"} >
              <CalendarHeading />
            </GridItem>
            <GridItem area={"main"}>
              <CalendarArea />
            </GridItem>
            <GridItem area={"footer"}>
              <FooterNavigation />
            </GridItem>
          </Grid>
        );
}

export default CalendarPage