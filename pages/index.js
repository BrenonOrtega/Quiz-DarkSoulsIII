import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Meta from '../src/components/MetaTag';
import YouDied from '../src/components/YouDied';
import Btn from '../src/components/Btn'


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
  opacity: 88%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
//const [name, setName] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    
    <QuizBackground backgroundImage={db.bg}>
      <Meta />
      <QuizContainer>
      <YouDied src = {db.SoulsLogo}/>
        <Widget>
          <Widget.Header>
            Welcome to Dark Souls!
          </Widget.Header>

          <Widget.Content>
            Não existe jeito melhor de iniciar um quiz de Dark Souls do que
            <YouDied src = {db.died}/>

            <form onSubmit = {function(event){
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fzd uma submissão com react')
              }}>

              <Widget.Input 
                onChange = {function(event){
                  console.log (event.target.value);
                  setName(event.target.value);
              }}
              placeholder = "Do you even remember your own name?"/>
              <Btn type = "submit" disabled = {name.length ===0}>
                Vamos começar {name} ? ;) 
              </Btn>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
          </Widget.Content>
          <Widget.Content>
            <p>Aqui serão inseridos alguns trabalhos incríveis de outros participantes do projeto!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrenonOrtega/" />
    </QuizBackground>
  );
}
