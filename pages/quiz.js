import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Meta from '../src/components/MetaTag';
import YouDied from '../src/components/YouDied';


import { useRouter } from 'next/router'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function QuizPage() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  useEffect(() => {
    function getQueryName() {
      const params = (new URL(window.location)).searchParams;
      const nameFromQuery = params.get('name');
      setName(nameFromQuery);
    }
    getQueryName();
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Meta />
      <QuizContainer>
      <Widget>
         <Widget.Header>
            <h1> {`Olá ${name}`}</h1>
         </Widget.Header>
         <Widget.Content>
            <YouDied src = {db.died}/>
         </Widget.Content>
        </Widget>  
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrenonOrtega/" />
    </QuizBackground>
  );
}
