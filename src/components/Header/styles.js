import styled from "styled-components";
import looper from "../../images/header/looper.png";

export const Center = styled.div`
  height: 140vh;
  position: relative;

  @media screen and (min-width: 0) and (max-width: 480px) {
    height: 105vh;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 120vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 125vh;
  }

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    height: 125vh;
  }
`;

export const Skew = styled.header`
  width: 100%;
  height: 85%;
  overflow: hidden;
  background: linear-gradient(110.96deg, #206ecf 0.72%, #71b0ff 100%);
  border-bottom: 12px solid #edf1f7;
  transform: skew(0deg, -10deg) translateY(-140px);
  position: absolute;

  @media screen and (min-width: 0) and (max-width: 480px) {
    transform: skew(0deg, -32deg) translateY(-150px);
    border-bottom: none;
    position: absolute;
    height: 97%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    transform: skew(0deg, -32deg) translateY(-240px);
    position: absolute;
    height: 108%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    transform: skew(0deg, -20deg) translateY(-240px);
    position: absolute;
    height: 112%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    height: 105%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 10%;
  padding: 0 20px;
  text-align: center;

  @media screen and (min-width: 0) and (max-width: 480px) {
    padding: 0 3.505%;
    height: 68%;
    top: 0;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 20px;
    height: 70%;
    top: 0;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    top: 35%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    top: 40%;
    transform: translateY(-50%);
    margin: 0;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: #f3f5f7;

    @media screen and (min-width: 0) and (max-width: 480px) {
      font-size: 16px;
      line-height: 26.4px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      font-size: 18px;
      line-height: 10px;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      font-size: 20px;
      line-height: 10px;
    }

    @media screen and (min-width: 1025px) and (max-width: 1200px) {
      font-size: 23px;
    }
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

    @media screen and (min-width: 0) and (max-width: 480px) {
      font-size: 32px;
      letter-spacing: 0.35px;
      line-height: 32px;
      width: 90%;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      font-size: 35px;
      line-height: 40px;
      margin-bottom: unset;
      width: 90%;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      font-size: 45px;
      line-height: 55px;
      width: 80%;
    }

    @media screen and (min-width: 1025px) and (max-width: 1200px) {
      font-size: 58px;
      width: 70%;
    }
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

    @media screen and (min-width: 0) and (max-width: 480px) {
      width: 100%;
      font-size: 14px;
      line-height: 23.1px;
      margin-bottom: 6%;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      font-size: 15px;
      margin-bottom: 8%;
      width: 80%;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      font-size: 17px;
      width: 80%;
    }

    @media screen and (min-width: 1025px) and (max-width: 1200px) {
      font-size: 18.5px;
      width: 62%;
      margin-bottom: 5%;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 2px;
  border-radius: 4px;
  border: none;
  color: #1b1e22;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  width: 165px;
  height: 48px;

  @media screen and (min-width: 0) and (max-width: 480px) {
    width: 250px;
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

  @media screen and (min-width: 0) and (max-width: 480px) {
    background-size: 135%;
    background-position: top right 40%;
    top: 19%;
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

export const ChatBubble = styled.img`
  position: absolute;
  overflow: hidden;
  width: 4%;
  border-radius: 50%;
  top: 227%;
  left: 93%;
  height: unset;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    top: 220%;
    left: 92%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    left: 92%;
    top: 170%;
  }
`;

export const Sample = styled.img`
  position: absolute;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  top: 107%;
  height: unset;
  width: 70%;

  @media screen and (min-width: 0) and (max-width: 480px) {
    width: 100%;
    top: 80%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 85%;
    top: 75%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    top: 115%;
    width: 85%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 80%;
    top: 67%;
  }
`;
