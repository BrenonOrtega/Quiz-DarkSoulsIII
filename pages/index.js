import styled from 'styled-components'
import db from "../db.json"
import Widget from "../src/components/Widget"
import Footer from "../src/components/Footer"
import QuizLogo from "../src/components/QuizLogo"
import GitHubCorner from "../src/components/GitHubCorner"
import QuizBackground from "../src/components/QuizBackground"

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

export default function Home() {
  return (
     <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Welcome to Dark Souls!</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Não existe jeito melhor de iniciar um quiz de Dark Souls do que com um</p>
            <img src={db.died} alt="My logo" style ={{width: 200, height: 100}}/>

            <Widget.Input placeholder="Do you have a name?" class="Widget__Input-i6tyvd-2 htMXfh"></Widget.Input>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h>Quiz da Galera</h>
          </Widget.Content>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet.... gera blabla bla</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl = "https://github.com/BrenonOrtega/"/>
    </QuizBackground>
  );
}
