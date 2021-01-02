import Layout from './hoc/Layout/Layout'
import Quiz from "./containers/Quiz/Quiz"
import { Route, Switch } from 'react-router-dom'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path="/"
          exact
          component={ QuizList }
        />

        <Route
          path="/auth"
          component={ Auth }
        />

        <Route
          path="/quiz-creator"
          component={ QuizCreator }
        />

        <Route
          path="/quiz/:id"
          component={ Quiz }
        />
      </Switch>
    </Layout>
  );
}

export default App
