import React from "react";
import arrow from "../../images/Right-Arrow.png";
import { graphql, useStaticQuery } from "gatsby";
import {
  ButtonsContainer,
  CallToActionContainer,
  ClientAvatar,
  ContactButton,
  Container,
  Discover,
  LeftContainer,
  RequestDemoButton,
  ReviewCards,
  ReviewsContainer,
  RightContainer,
  Title,
} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsReviews = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const data = useStaticQuery(graphql`
    query reviewsQuery {
      clientsReviewsJson {
        reviewsCards {
          customer_avatar {
            url {
              publicURL
            }
          }
          description
          user
          logo {
            url {
              publicURL
            }
          }
        }
      }
    }
  `);

  const mappedData = data.clientsReviewsJson.reviewsCards;

  return (
    <Container>
      <ReviewsContainer>
        <LeftContainer>
          <Title>What our costumers say</Title>
          <Discover>
            150 + incubators/accelerators using AcceleratorApp
            <img src={arrow} alt='' />
          </Discover>
        </LeftContainer>
        <RightContainer>
          <Slider {...settings}>
            {mappedData?.map((data) => {
              return (
                <ReviewCards>
                  <p>{data.description}</p>
                  <span dangerouslySetInnerHTML={{ __html: data.user }} />
                  <img src={data.logo.url.publicURL} alt='' />
                  <ClientAvatar
                    className='avatar'
                    src={data.customer_avatar.url.publicURL}
                    alt=''
                  />
                </ReviewCards>
              );
            })}
          </Slider>
        </RightContainer>
      </ReviewsContainer>
      <CallToActionContainer>
        <h3>What are you waiting for?</h3>
        <h2>Join +150 companies that already trust us for their growth</h2>
        <ButtonsContainer>
          <RequestDemoButton>Request a Demo</RequestDemoButton>
          <ContactButton>Contact Us</ContactButton>
        </ButtonsContainer>
      </CallToActionContainer>
    </Container>
  );
};

export default ClientsReviews;
