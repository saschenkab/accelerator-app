import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
  Card,
  CardsContainer,
  Container,
  Skew,
  Title,
  Image,
  Description,
  DiscoverButton,
} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import arrow from "../../images/Right-Arrow.png";

const Features = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      featuresJson {
        featuresCards {
          title
          description
          icon {
            url {
              publicURL
            }
          }
        }
      }
    }
  `);

  const s_m_width = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const mappedData = data.featuresJson.featuresCards;

  const Cards = () => {
    if (s_m_width) {
      return (
        <Slider {...settings}>
          {mappedData.map((features) => {
            return (
              <Card id={features.id}>
                <Image
                  key={features.icon.url.publicURL}
                  src={features.icon.url.publicURL}
                  alt='icon'
                />
                <Title>{features.title}</Title>
                <Description>{features.description}</Description>
              </Card>
            );
          })}
        </Slider>
      );
    } else {
      return (
        <>
          {mappedData.map((features) => {
            return (
              <Card>
                <Image src={features.icon.url.publicURL} alt='icon' />
                <Title>{features.title}</Title>
                <Description>{features.description}</Description>
              </Card>
            );
          })}
          <DiscoverButton>
            Discover its functions <img src={arrow} alt='' />
          </DiscoverButton>
        </>
      );
    }
  };
  return (
    <div>
      <Container>
        <Skew />
        <>
          <h1>Features Integrated</h1>
          <span>
            Know all the features that we have to accelerate your business
          </span>
        </>
        <CardsContainer>
          <Cards />
        </CardsContainer>
      </Container>
    </div>
  );
};

export default Features;
