import styled from "styled-components";

export const Skew = styled.div`
  width: 100%;
  height: 115%;
  overflow: hidden;
  background: #f1f8f9;
  transform: skew(0deg, -8deg) translateY(-145px);
  top: 3%;
  position: absolute;
  z-index: -1;

  @media screen and (min-width: 0) and (max-width: 480px) {
    transform: skew(0deg, -7deg) translateY(-140px);
    top: -70%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    transform: skew(0deg, -7deg) translateY(-140px);
    top: 20%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 10%;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 48px;
    align-self: flex-start;
    margin: 0;
    margin-bottom: 8px;
    color: #111b29;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    align-self: flex-start;
    color: #6b788a;
    margin-bottom: 72px;
  }

  @media screen and (min-width: 0) and (max-width: 480px) {
    padding: 0 3.505%;
    h1 {
      margin-bottom: 7%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 4%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0 8%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  gap: 20px;

  div:nth-child(7) {
    img {
      background-color: #fff;
      width: 60px;
    }
  }

  .slick-slider {
    width: 100%;
    height: 280px;
  }

  .slick-slide {
    width: 100%;
    padding: 10px;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-dots li {
    width: 5px;
  }

  .slick-dots li button {
    display: block;
    width: 7px;
    height: 7px;
    padding: 3px;
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
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 0 16px;
  background-color: #fff;
  width: calc(33.33% - 20px);
  height: 237px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 32px;

  @media screen and (min-width: 0) and (max-width: 600px) {
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  }
`;

export const Image = styled.img`
  object-fit: scale-down;
  background-color: #206ecf;
  border-radius: 16px;
  width: 42.35px;
  height: 42px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 27px;
  color: #111b29;
  margin: 0;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #677489;
  margin: 0;
`;

export const DiscoverButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 6.5%;
  color: #206ecf;
  font-weight: 600;
  width: 18%;
  line-height: 18px;
  text-align: center;
  font-size: 14px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #206ecf40;
  cursor: pointer;
  transition: 0.5s;

  img {
    object-fit: scale-down;
    margin-left: 2%;
  }

  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border: none;
    width: 20%;
    img {
      transform: translateX(20%);
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1270px) {
    font-size: 12px;
    width: 20%;
    margin: 5%;

    &:hover {
      width: 21%;
    }
  }
`;
