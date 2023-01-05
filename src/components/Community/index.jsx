import React from "react";
import {
  ActionCardsContainer,
  Button,
  ButtonsContainer,
  CardDescription,
  CardList,
  Cards,
  CardSubtitle,
  CardTitle,
  CardTitleContainer,
  Container,
  CardButton,
  Intro,
  CardSeparator,
} from "./styles";
import incubator from "../../images/community/incubator.png";
import rectangle from "../../images/community/Rectangle.png";
import startup from "../../images/community/Startup-image.png";
import recangle1 from "../../images/community/Rectangle1.png";
import recangle2 from "../../images/community/Rectangle2.png";
import check from "../../images/community/check.png";
import { useStaticQuery, graphql } from "gatsby";

const Community = () => {
  const data = useStaticQuery(graphql`
    query CommunityQuery {
      communityJson {
        communityCards {
          title
          description
          list
          listTitle
          buttonLink
          icon {
            url {
              publicURL
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <ButtonsContainer>
        <Button>
          <img src={incubator} alt='incubator' />
        </Button>
        <Button>
          <img src={startup} alt='startup' />
        </Button>
        <Button>
          <img src={rectangle} alt='menu' />
        </Button>
        <Button>
          <img src={recangle1} alt='file' />
        </Button>
        <Button>
          <img src={recangle2} alt='stats' />
        </Button>
      </ButtonsContainer>
      <Intro>
        <h3>Community</h3>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Intro>
      <ActionCardsContainer>
        {data.communityJson.communityCards.map((communityCard) => {
          return (
            <Cards>
              <CardTitleContainer>
                <img src={communityCard.icon.url.publicURL} alt='icon'></img>
                <CardTitle>{communityCard.title}</CardTitle>
              </CardTitleContainer>
              <CardDescription
                dangerouslySetInnerHTML={{ __html: communityCard.description }}
              />
              <CardSeparator />
              <CardSubtitle>{communityCard.listTitle}</CardSubtitle>
              {communityCard.list.map((listItems) => {
                return (
                  <CardList>
                    <img src={check} alt='check-icon' />
                    {listItems}
                  </CardList>
                );
              })}
              <CardButton>Get Started</CardButton>
            </Cards>
          );
        })}
      </ActionCardsContainer>
    </Container>
  );
};

export default Community;
