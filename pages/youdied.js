import db from "../db.json"
import GitHubCorner from "../src/components/GitHubCorner"
import QuizBackground from "../src/components/QuizBackground"
import YouDied from "../src/components/YouDied"

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.died}>
      <GitHubCorner projectUrl="https://github.com/BrenonOrtega/imersao-react-project"/>

    </QuizBackground>      
  )
}

