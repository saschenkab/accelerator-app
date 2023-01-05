import styled from "styled-components";
import looper from "../../images/header/looper.png";
import chatBubble from "../../images/header/chat-bubble.png";
import chatBubble2 from "../../images/header/chat-bubble2.png";

const bubbles = { chatBubble, chatBubble2 };

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  @media screen and (min-width: 0) and (max-width: 480px) {
    margin-top: 45%;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 25%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 25%;
  }
`;

export const Skew = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(110.96deg, #206ecf 0.72%, #71b0ff 100%);
  border-bottom: 12px solid #edf1f7;
  transform: skew(0deg, -10deg) translateY(-269px);
  position: absolute;

  @media screen and (min-width: 0) and (max-width: 480px) {
    transform: skew(0deg, -25deg) translateY(-150px);
    border-bottom: none;
    height: 135%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    transform: skew(0deg, -25deg) translateY(-140px);
    height: 120%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    transform: skew(0deg, -15deg) translateY(-240px);
    height: 140%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    height: 105%;
  }
`;

export const Looper = styled.div`
  background-image: url(${looper});
  background-size: 80%;
  background-position: top left 115%;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;

  @media screen and (min-width: 0) and (max-width: 480px) {
    background-size: 135%;
    background-position: top right 40%;
    top: 21%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    background-size: 140%;
    background-position: top right 30%;
    top: 10%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-size: 110%;
    background-position: top right 30%;
    top: 15%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    background-size: 100%;
    background-position: top right 30%;
    top: 8%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px;
  text-align: center;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: #f3f5f7;
  }

  h2 {
    width: 60%;
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 64px;
    letter-spacing: 1px;
    color: #ffffff;
    height: unset;
    margin: 0;
    margin-top: 2%;
  }

  p {
    width: 50%;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 165%;
    color: #e7eaee;
    margin-top: 1%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: 0) and (max-width: 480px) {
    padding: 0 3.505%;
    margin-bottom: 15%;

    span {
      font-size: 16px;
      line-height: 26.4px;
    }

    h2 {
      font-size: 32px;
      letter-spacing: 0.35px;
      line-height: 32px;
      width: 90%;
    }

    p {
      width: 100%;
      font-size: 14px;
      line-height: 23.1px;
      margin-bottom: 6%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 2%;
    margin-bottom: 15%;

    span {
      font-size: 18px;
      line-height: 10px;
    }

    h2 {
      font-size: 35px;
      line-height: 40px;
      margin-bottom: unset;
      width: 90%;
    }

    p {
      font-size: 15px;
      margin-bottom: 5%;
      width: 80%;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 10%;

    span {
      font-size: 20px;
      line-height: 10px;
    }

    h2 {
      font-size: 45px;
      line-height: 55px;
      width: 80%;
    }

    p {
      font-size: 17px;
      width: 80%;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    span {
      font-size: 23px;
    }

    h2 {
      font-size: 58px;
      width: 70%;
    }

    p {
      font-size: 18.5px;
      width: 62%;
      margin-bottom: 5%;
    }
  }
`;

export const Button = styled.div`
  padding: 12px 2px;
  border-radius: 4px;
  border: none;
  color: #1b1e22;
  background-color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  width: 165px;
  height: 48px;

  @media screen and (min-width: 0) and (max-width: 480px) {
    width: 250px;
  }
`;

export const ChatBubble = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 4%;
  border-radius: 50%;
  padding: 2.5%;
  top: 90%;
  left: 90%;
  height: 4%;
  background-image: url(${bubbles.chatBubble});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &:hover {
    background-image: url(${bubbles.chatBubble2});
  }

  &:focus {
    background-image: url(${bubbles.chatBubble2});
  }
`;

export const Sample = styled.img`
  position: relative;
  overflow: hidden;
  margin-top: 5%;
  height: unset;
  width: 70%;

  @media screen and (min-width: 0) and (max-width: 480px) {
    width: 100%;
    margin-top: 10%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 95%;
    margin-top: 10%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 87%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 80%;
  }
`;
