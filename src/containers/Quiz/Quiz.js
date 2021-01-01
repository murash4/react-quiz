import { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
	state = {
		activeQuestion: 0,
		quiz: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				id: 1,
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
			},
			{
				question: 'В каком году основали Санкт-Петербург',
				rightAnswerId: 3,
				id: 2,
				answers: [
					{
						id: 1,
						text: '1700'
					},
					{
						id: 2,
						text: '1702'
					},
					{
						id: 3,
						text: '1703'
					},
					{
						id: 4,
						text: '1803'
					}
				]
			}
		]
	}

	onAnswerClickHandler = answerId => {
		if (this.state.activeQuestion + 1 < this.state.quiz.length) {
			this.setState({
					activeQuestion: this.state.activeQuestion + 1
			})
		}
	}

	render () {
		return (
			<div className={ classes.Quiz }>
				<div className={ classes['Quiz__wrapper'] }>
					<h1 className={ classes['Quiz__h1'] }>Ответьте на все вопросы</h1>
					<ActiveQuiz
						question={ this.state.quiz[this.state.activeQuestion].question }
						answers={ this.state.quiz[this.state.activeQuestion].answers }
						quizLength={ this.state.quiz.length }
						activeNumber={ this.state.activeQuestion + 1 }
						onAnswerClick={ this.onAnswerClickHandler }
					/>
				</div>
			</div>
		)
	}
}

export default Quiz
