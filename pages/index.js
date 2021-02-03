import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Meta from '../src/components/Meta';
import Image from '../src/components/Image';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Meta />
      <QuizContainer>
        <Image
          as={motion.section}
          transition={{ delay: 0.9, duration: 1 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          src={db.SoulsLogo}
          largura="220px"
          altura="90px"
        />
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>Bem vindo ao quiz de Dark souls III</Widget.Header>

          <Widget.Content>
            <Image src={db.died} />
            <p>
              Não existe jeito melhor de iniciar
              um quiz de Dark Souls do que com essa velha conhecida?
            </p>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuário"
                onChange={(event) => { setName(event.target.value); }}
                placeholder="Do you even remember your own name?"
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                <p>
                  {`Vamos começar ${name}? ;)`}
                </p>
              </Button>

            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            Quiz da Galera
          </Widget.Header>
          <Widget.Content>
            {db.external.map((linkExterno) => {
              const [projectName, gitHubUser] = (linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .replace('.', ' ')
                .split(' '));
              return (
                <Widget.Topic
                  key={linkExterno}
                  href={`/quiz/${projectName}__${gitHubUser}`}>

                  {projectName}
                  {' do '}
                  {gitHubUser}

                </Widget.Topic>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrenonOrtega/" />
      <QuizContainer />
    </QuizBackground>
  );
}
