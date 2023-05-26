import { Heading } from "@chakra-ui/react"
import video from "./../assets/construction.mp4"
import FooterNavigation from "../components/FooterNavigation";

const ErrorPage = () => {
    return (
      <>
        <Heading marginTop={"2rem"} marginLeft={"2rem"} color={"#E57E06"}>
          Denna sida är under konstruktion!
        </Heading>
        <video
          src={video}
          muted
          autoPlay={true}
          loop
          className="constructionVideo"
        >
          Din webbläsare stödjer inte videos
        </video>
        <FooterNavigation />
      </>
    );
}

export default ErrorPage