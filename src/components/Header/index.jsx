import React from "react";
import {
  Button,
  Center,
  ChatBubble,
  Container,
  Looper,
  Sample,
  Skew,
} from "./styles";
import sample from "../../images/header/Videosample.png";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const s_m_width = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const ShowChatBubble = () => {
    if (!s_m_width) {
      return <ChatBubble />;
    }
  };

  return (
    <Container>
      <Skew />
      <Looper />
      <Center>
        <span>Join in and connect</span>
        <h2>To faster your innovation potential</h2>
        <p>
          AcceleratorApp Innovation Community — Tools and community to
          facilitate innovation between all members of our community
        </p>
        <Button>Schedule a Demo</Button>
        <Sample src={sample} alt='sample' loading='lazy' />
        <ShowChatBubble />
      </Center>
    </Container>
  );
};

export default Header;
