/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Meta from '../src/components/Meta';
import Image from '../src/components/Image';
import QuizContainer from '../src/components/QuizContainer';
import Player from '../src/components/Player';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <QuizContainer>
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>
        <Widget.Content>
          [DESAFIO O LOADING]
        </Widget.Content>
      </Widget>
    </QuizContainer>
  );
}
const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) => {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <Widget.Content>

        <Image src={question.image} />

        <h2>
          {question.title}
        </h2>

        <p>
          {question.description}
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                // style{{display: 'none'}}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          }) }
          {/*
        <pre>
        {JSON.stringify(question, null, 4)}
        </pre>
        */}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
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
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.PlayQuiz);
    }, 1 * 1000);
    //  nasce === didMount
  }, []);

  /*  setCurrentQuestion(() => {
  }) */

  //  [React chama de: Efeitos || Effects]
  //  React.useEffect
  //  atualizado === willUpdate
  //  more === willUnmount

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
          />
        )}

        {screenState === screenStates.Loading && <LoadingWidget />}

        {screenState === screenStates.Result && (
          <div>
            Você acertou X questões, Parabéns!
          </div>
        )}
        <Player />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrenonOrtega/" />

    </QuizBackground>
  );
}
