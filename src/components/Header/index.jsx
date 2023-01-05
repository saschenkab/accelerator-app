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
import chatBubble from "../../images/header/chat-bubble.png";
import chatBubble2 from "../../images/header/chat-bubble2.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [hovering, setHovering] = useState(false);

  const s_m_width = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const ShowChatBubble = () => {
    if (!s_m_width) {
      return (
        <div
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
        >
          <ChatBubble
            src={hovering ? chatBubble2 : chatBubble}
            alt='chat-bubble'
          />
        </div>
      );
    }
  };

  return (
    <Center>
      <Skew></Skew>
      <Looper />
      <Container>
        <span>Join in and connect</span>
        <h2>To faster your innovation potential</h2>
        <p>
          AcceleratorApp Innovation Community — Tools and community to
          facilitate innovation between all members of our community
        </p>
        <Button>Schedule a Demo</Button>
        <Sample src={sample} alt='sample' />
        <ShowChatBubble />
      </Container>
    </Center>
  );
};

export default Header;
