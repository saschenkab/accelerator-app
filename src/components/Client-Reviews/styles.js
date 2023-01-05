import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15%;
  padding: 0 7%;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    padding: 0 3.505%;
  }
`;

export const ReviewsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1% 0 4%;
  flex-direction: row;
  position: relative;

  @media screen and (min-width: 0px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const LeftContainer = styled.div`
  width: 45%;
  margin-top: 1%;
  padding-right: 3%;
  align-self: flex-start;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 70%;
    margin-bottom: 5%;
  }
`;

export const RightContainer = styled.div`
  width: 60%;
  padding: 0;

  .slick-slider {
    height: 70%;
    width: 100%;
  }

  .slick-slide {
    height: 550px;
    padding: 0 1% 0 0.5%;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-dots {
    z-index: -1;
    top: 97%;
    position: absolute;

    li {
      width: 5px;
      right: 10%;
    }
  }

  .slick-dots li button {
    display: block;
    width: 2px;
    height: 2px;
    padding: 2.5px;
    cursor: pointer;
    background: white;
    border: 1px solid #206ecf;
    border-radius: 50%;
    &:hover {
      background-color: #206ecf;
    }
  }

  .slick-dots li.slick-active button {
    background-color: #206ecf !important;
  }

  .slick-dots li button:before {
    content: none;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    width: 100%;

    .slick-slide {
      padding: 0 0.5% 0 0.2%;
    }
    .slick-dots {
      top: 40%;

      li {
        width: 3px;
        button {
          padding: 1.5px;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 100%;

    .slick-dots {
      top: 67%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin-top: 20%;

    .slick-dots {
      top: 65%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 54px;
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 6.5%;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Discover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #206ecf;
  font-weight: 500;
  width: auto;
  height: 100%;
  line-height: 18px;
  text-align: center;
  font-size: 14px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #206ecf40;

  img {
    object-fit: scale-down;
    margin-left: 1%;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    position: absolute;
    width: 100%;
    font-size: 12px;
    top: 80%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 13px;
    position: absolute;
    width: 90%;
  }
`;

export const ClientAvatar = styled.img`
  object-fit: scale-down;
  position: absolute;
  float: right;
  height: unset;
  top: 68%;
  left: 58%;
  border-radius: 32px;
  filter: drop-shadow(0px 9px 28px rgba(0, 0, 0, 0.18));
`;

export const ReviewCards = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 5%;
  border-radius: 32px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  font-size: 14px;
  background-color: #fff;

  p {
    text-align: justify;
    line-height: 27px;
    font-weight: 500;
    margin-bottom: 5.2%;
  }

  span {
    line-height: 21px;
    font-weight: 500;

    b {
      font-weight: 600;
    }
  }

  img {
    margin-top: 5.2%;
    object-fit: scale-down;
    align-self: left;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    font-size: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);

    p {
      line-height: 16px;
    }

    img {
      width: 30%;
    }

    ${ClientAvatar} {
      width: 45%;
      left: 55%;
      filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.18));
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;

    p {
      line-height: 20px;
    }

    ${ClientAvatar} {
      width: 40%;
      top: 80%;
      left: 65%;
      filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.18));
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    padding: 4%;
    font-size: 13px;

    ${ClientAvatar} {
      width: 50%;
      top: 75%;
    }
  }
`;

export const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15% 0;

  h3 {
    color: #6b788a;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }

  h2 {
    color: #111b29;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin: 0;
    width: 75%;
    line-height: 48px;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    h2 {
      font-size: 18px;
      width: 100%;
      line-height: 20px;
    }

    h3 {
      font-size: 14px;
      margin-bottom: 2%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    h3 {
      font-size: 16px;
    }

    h2 {
      width: 100%;
      font-size: 25px;
      line-height: 30px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    h2 {
      width: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  margin-top: 2%;
  gap: 3%;

  @media screen and (min-width: 0) and (max-width: 480px) {
    width: 90%;
    flex-direction: row-reverse;
    margin-top: 8%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 5%;
  }
`;

export const RequestDemoButton = styled.div`
  background: #206ecf;
  display: flex;
  border-radius: 4px;
  font-weight: 600;
  color: #ffff;
  font-size: 14px;
  padding: 12px 24px;
  align-items: center;
`;

export const ContactButton = styled.div`
  border-radius: 4px;
  font-weight: 600;
  color: #206ecf;
  border: 1px solid #206ecf;
  padding: 12px 24px;
`;
