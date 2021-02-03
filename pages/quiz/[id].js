import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizPage from '.';

export default function QuizDaGaleraPage({dbExterno}) {
  return (
      <ThemeProvider theme={dbExterno.theme}>
        <QuizPage dbExterno={dbExterno} />
      {/* <p>{JSON.stringify(dbExterno)}</p> */}
      </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
    .then((respostaServidor) => {
      if (respostaServidor.ok) {
        return respostaServidor.json();
      }
      throw new Error('Falha em pegar dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });
  return {
    props: {
      dbExterno,
    },
  };
}
