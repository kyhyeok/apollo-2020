import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      description_intro
      isLiked @client
    }
    suggestions(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 24px;
`;

const Poster = styled.div`
  width: 45%;
  height: 70%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Seggestions = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const Seggestion = styled.div`
  width: 23%;
`;

const STitle = styled.h3`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
`;

const SPoster = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default () => {
  let { id } = useParams();
  id = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  console.log(data);
  return (
    <Container>
      <Column>
        <Title>
          {loading
            ? "Loading..."
            : `${data.movie.title} ${data.movie.isLiked ? "♥" : "X"}`}
        </Title>
        <Subtitle>
          {data?.movie?.language} ㆍ {data?.movie?.rating}
        </Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
      <Seggestions>
        {data?.suggestions?.map((s) => (
          <Seggestion key={s.id}>
            <Link to={`/${s.id}`}>
              <STitle>{s.title}</STitle>
              <SPoster bg={s.medium_cover_image}></SPoster>
            </Link>
          </Seggestion>
        ))}
      </Seggestions>
    </Container>
  );
};
