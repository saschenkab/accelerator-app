import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 2%;
  padding: 0 8%;
  margin-bottom: 15%;

  @media screen and (min-width: 0) and (max-width: 480px) {
    padding: 0 3.505%;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 4%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1500px) {
    top: 0;
    padding: 0 11%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5%;
  gap: 4.4%;
  align-items: center;
  height: 320px;
  width: 100%;
  margin-bottom: 56px;

  @media screen and (min-width: 0) and (max-width: 480px) {
    height: 138px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 155px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 200px;
    margin-top: 10%;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
  width: 25%;
  aspect-ratio: 1/1;

  box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.18);
  border-radius: 20%;
  align-self: flex-end;

  &:nth-child(2) {
    align-self: center;
    margin-bottom: 1%;
    img {
      width: 85%;
    }
  }

  &:nth-child(3) {
    align-self: flex-start;
    margin-top: 10px;
  }

  &:nth-child(4) {
    margin-bottom: 1%;
    align-self: center;
  }

  &:nth-child(5) {
    img {
      width: 85%;
    }
  }

  img {
    width: 55%;
  }

  @media screen and (min-width: 0) and (max-width: 480px) {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.18);
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 100%;
  opacity: 0.8;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #206ecf;
    margin: 0;
    margin-bottom: 8px;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 1.26px;
    margin: 0;
    margin-bottom: 1%;
    color: #1f2024;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #6b788a;
    margin: 0;
  }

  @media screen and (min-width: 0) and (max-width: 480px) {
    h3 {
      font-size: 16px;
    }
  }
`;

export const ActionCardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 86px;
  margin-bottom: 46.57px;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: calc(33.33% - 12px);
  padding: 32px;
  box-shadow: 0px 8px 15px 1px rgba(0, 0, 0, 0.08);
  border-radius: 32px;

  @media screen and (min-width: 0) and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    justify-self: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1204px) {
    width: calc(50% - 9px);
  }

  @media screen and (min-width: 1025px) and (max-width: 1320px) {
    padding: 24px;
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 23.1px;

  img {
    object-fit: scale-down;
    margin-right: 4%;
    width: 32px;
    height: 32px;
    background: #206ecf;
    border-radius: 8px;
  }

  @media screen and (min-width: 0) and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const CardTitle = styled.h2`
  align-self: flex-start;
  margin: 0;
  color: #363c45;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 32px;

  @media screen and (min-width: 0) and (max-width: 480px) {
    font-size: 26px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 19px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1220px) {
    font-size: 22px;
  }
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  color: #33475b;
  margin: 0;
  margin-bottom: 18.14px;

  @media screen and (min-width: 0) and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const CardSeparator = styled.div`
  background-color: #cbd6e2;
  margin-bottom: 32.14px;
  height: 1px;
`;

export const CardSubtitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  color: #33475b;
  margin: 0;
  margin-bottom: 16.7px;
`;

export const CardList = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 29px;
  color: #33475b;
  margin-bottom: 8.04px;

  img {
    object-fit: contain;
    margin-right: 3%;
  }
`;

export const CardButton = styled.div`
  align-content: center;
  padding: 12px 24px;
  margin-top: 72.32px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background: #206ecf;
  border-radius: 4px;
  align-self: center;
  width: 90%;
`;
