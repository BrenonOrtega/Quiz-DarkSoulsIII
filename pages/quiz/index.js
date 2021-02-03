/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import db from '../../db.json';
import Meta from '../../src/components/Meta';
import Image from '../../src/components/Image';
import Widget from '../../src/components/Widget';
import Button from '../../src/components/Button';
import Song from '../../src/assets/audio/song.mp3';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizContainer from '../../src/components/QuizContainer';
import QuizBackground from '../../src/components/QuizBackground';
import AlternativesForm from '../../src/components/AlternativesForm';

function ResultWidget({ results }) {
  /* itera cada um dos index do array e retorna  o comprimento do array (.length) com cada tupla
  que atende a condição abaixo. "iterando cada index x e para cada x == true, retorna x(true)" */
  const total = results.filter((x) => x === true).length;
  const bad = 'https://media.giphy.com/media/60rGqeykp8O597gBNO/giphy.gif';
  const nice = 'https://steamuserimages-a.akamaihd.net/ugc/608351653791599621/B9223EDC00598B2395F3C80A4DB7C315D056FEAC/';
  const ashenOne = 'https://media.giphy.com/media/LLvqxmK3gOXLy/giphy.gif';
  return (
    <Widget>
      <Widget.Header>
        RESULTADO:
      </Widget.Header>
      <Widget.Content>
        <p>
          Você Acertou
          {' '}
          {/* A função abaixo faz a mesma coisa que o results.filter no ínicio da function.
           {resultados.reduce((somatoriaAcertos, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAcertos + 1;
            }
            return somatoriaAcertos;
          }, 0)} */}
          { total }
          {' '}
          perguntas.

          {total < 3 && <Image src={bad} /> }
          {total > 3 && <Image src={nice} />}
          {total === 3 && <Image src={ashenOne} />}
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
        <h1>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h1>
      </Widget.Header>

      <Widget.Content>
        <Image src={question.image} />
        <h1>{question.title}</h1>

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

function BGM() {
  const audioTrack = useRef();

  function handlePlay() {
    audioTrack.current.volume = 0.3;
    audioTrack.current.play();
  }

  React.useEffect(() => handlePlay(), []);
  return (
    <audio ref={audioTrack} src={Song} />
  );
}

const screenStates = {
  Loading: 'Loading',
  PlayQuiz: 'PlayQuiz',
  Result: 'Result',
};

export default function QuizPage({externalQuestions}) {
  const dados = externalQuestions === undefined ? db : externalQuestions;
  const [screenState, setScreenState] = React.useState(screenStates.Loading);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const totalQuestions = dados.questions.length;
  const questionIndex = currentQuestion;
  const question = dados.questions[questionIndex];

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
    <QuizBackground backgroundImage={dados.bg}>
      <Meta />
      <Image.Logo
        src={db.SoulsLogo}
        largura="220px"
        altura="90px"
      />
      <QuizContainer>
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
      </QuizContainer>
      <BGM />
      <GitHubCorner projectUrl="https://github.com/BrenonOrtega/" />

    </QuizBackground>
  );
}
