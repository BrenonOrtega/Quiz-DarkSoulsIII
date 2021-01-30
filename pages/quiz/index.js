import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizBackground from '../../src/components/QuizBackground';
import Meta from '../../src/components/Meta';
import Image from '../../src/components/Image';
import QuizContainer from '../../src/components/QuizContainer';
import Player from '../../src/components/Player';
import Button from '../../src/components/Button';
import AlternativesForm from '../../src/components/AlternativesForm';
import Song from '../../src/assets/audio/song.mp3';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Seus resultados:
      </Widget.Header>
      <Widget.Content>
        <p>
          Você Acertou
          {' '}

          {/* A função abaixo faz a mesma coisa que o comando na sequência.
           {resultados.reduce((somatoriaAcertos, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAcertos + 1;
            }
            return somatoriaAcertos;
          }, 0)} */}
          {/* Comando que itera cada um dos index do array e retorna (.length) o comprimento do array
           com cada tupla que atende a condição abaixo. "itera x, para cada x == true, retorna x(true)" */}

          {results.filter((x) => x === true).length }
          {' '}
          perguntas.
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {' '}
              { // JSON.stringify(`results:${result}`)
              }
              {result === true
                ? 'Acertou!'
                : 'Errou!'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        What is done, cannot be undone.
      </Widget.Header>
      <Widget.Content>
        <Image
          src="https://i0.wp.com/nileease.com/wp-content/uploads/2020/05/8021744fc275101ed9a4b75ace41f168.gif?fit=231%2C219&ssl=1"
        />
      </Widget.Content>
    </Widget>
  );
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `Question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <Widget.Content>
        <Image src={question.image} />

        <h2>{question.title}</h2>

        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
              onSubmit();
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          }) }
          <Button
            type="submit"
            disabled={!hasAlternativeSelected}
          >
            Confirmar
          </Button>
        </AlternativesForm>

        {isQuestionSubmited && isCorrect && <p>Você acertou</p>}

        {isQuestionSubmited && !isCorrect && <p>Você errow</p>}

      </Widget.Content>
    </Widget>
  );
};

QuestionWidget.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

const screenStates = {
  Loading: 'Loading',
  PlayQuiz: 'PlayQuiz',
  Result: 'Result',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.Loading);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.PlayQuiz);
    }, 1 * 3000);
    //  nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.Result);
    }
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Meta />
        <Image src={db.SoulsLogo} />

        {screenState === screenStates.PlayQuiz && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.Loading && <LoadingWidget />}

        {screenState === screenStates.Result && <ResultWidget results={results} />}
        <Player />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrenonOrtega/" />

    </QuizBackground>
  );
}
