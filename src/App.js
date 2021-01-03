import { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from "./containers/Quiz/Quiz"
import { Redirect, Route, Switch } from 'react-router-dom'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Logout/Logout'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import { connect } from 'react-redux'
import { autoLogin } from './store/actions/auth'

class App extends Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render () {
    let routes = (
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
          path="/quiz/:id"
          component={ Quiz }
        />

        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route
            path="/logout"
            component={ Logout }
          />

          <Route
            path="/quiz-creator"
            component={ QuizCreator }
          />

          <Route
            path="/"
            exact
            component={ QuizList }
          />

          <Route
            path="/quiz/:id"
            component={ Quiz }
          />

          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <Layout>
        { routes }
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchoProps (dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchoProps)(App)
