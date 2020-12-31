import { Component } from 'react'
import classes from './Quiz.module.scss'

class Quiz extends Component {
	state = {
		quiz: []
	}

	render () {
		return (
			<div className={ classes.Quiz }>
				<h1 className={ classes['Quiz__h1'] }>Quiz</h1>
			</div>
		)
	}
}

export default Quiz
