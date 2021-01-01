import { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
	state = {
		quiz: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				answers: [
					{
						id: 1,
						text: 'Черный'
					},
					{
						id: 2,
						text: 'Синий'
					},
					{
						id: 3,
						text: 'Красный'
					},
					{
						id: 4,
						text: 'Зеленый'
					}
				]
			}
		]
	}

	onAnswerClickHandler = answerId => {
		console.log(answerId)
	}

	render () {
		return (
			<div className={ classes.Quiz }>
				<div className={ classes['Quiz__wrapper'] }>
					<h1 className={ classes['Quiz__h1'] }>Ответьте на все вопросы</h1>
					<ActiveQuiz
						question={ this.state.quiz[0].question }
						answers={ this.state.quiz[0].answers }
						onAnswerClick={ this.onAnswerClickHandler }
					/>
				</div>
			</div>
		)
	}
}

export default Quiz
