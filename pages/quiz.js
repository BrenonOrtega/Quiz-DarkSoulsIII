import styled from 'styled-components'
import db from "../db.json"
import Widget from "../src/components/Widget"
import Footer from "../src/components/Footer"
import QuizLogo from "../src/components/QuizLogo"
import GitHubCorner from "../src/components/GitHubCorner"
import QuizBackground from "../src/components/QuizBackground"
import Meta from "../src/components/MetaTag"


export default function QuizPage() {
  return (
    <img src={db.died} alt="My logo" style ={{width: 200, height: 100}}/>,
    <YouDied/>
  );
}
