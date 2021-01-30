import React from 'react';

export default function QuizDaGaleraPage(props) {


  return (
    <div style={{ color: 'black' }}>
      Quiz externo galera da imersão.
      {JSON.stringify(props, null, 4)}
    </div>
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
