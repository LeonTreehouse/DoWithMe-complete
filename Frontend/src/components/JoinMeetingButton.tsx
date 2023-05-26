import { useState } from "react";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { Button, WrapItem } from "@chakra-ui/react";

const JoinMeetingButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
    <WrapItem>
      <Button
        size="sm"
        marginLeft="16rem"
        marginTop="-2rem"
        onClick={handleClick}
        borderRadius="md"
        color="white"
        fontWeight="bold"
        transition="background-color 0.5s ease"
        background={isClicked ? "#00ff7f" : "#ff6347"}
        _hover={{ opacity: 0.8 }}
        _focus={{ boxShadow: "none" }}
        position="relative"
        overflow="hidden"
      >
        <CloseIcon
          opacity={isClicked ? 0 : 1}
          transition="opacity 0.3s ease"
          position="absolute"
          top="50%"
          left="50%"
          transform={`translate(-50%, -50%) scale(${isClicked ? 0.7 : 1})`}
        />
        <CheckIcon
          opacity={isClicked ? 1 : 0}
          transition="opacity 0.3s ease"
          position="absolute"
          top="50%"
          left="50%"
          transform={`translate(-50%, -50%) scale(${isClicked ? 1.3 : 1})`}
        />
      </Button>
    </WrapItem>
    </>
  );
};

export default JoinMeetingButton;
