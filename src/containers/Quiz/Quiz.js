import React, { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

class Quiz extends Component {
	state = {
		results: {},
		isFinished: false,
		activeQuestion: 0,
		answerState: null,
		quiz: [],
		loading: true
	}

	isQuizFinished () {
		return this.state.activeQuestion + 1 === this.state.quiz.length
	}

	onAnswerClickHandler = answerId => {
		// защита от повторного ответа в случае уже выбранного правильного ответа
		if (this.state.answerState) {
			const key = Object.keys(this.state.answerState)[0]

			if (this.state.answerState[key] === 'success') {
				return
			}
		}

		const question = this.state.quiz[this.state.activeQuestion]
		const results = this.state.results

		if (question.rightAnswerId === answerId) {
			if (!results[question.id]) {
				results[question.id] = 'success'
			}

			this.setState({
				results,
				answerState: {
					[answerId]: 'success'
				}
			})

			const timeout = setTimeout(() => {
				if (this.isQuizFinished()) {
					this.setState({
						isFinished: true
					})
				} else {
					if (this.state.activeQuestion + 1 < this.state.quiz.length) {
						this.setState({
							activeQuestion: this.state.activeQuestion + 1,
							answerState: null
						})
					}
				}

				clearTimeout(timeout)
			}, 1000)
		} else {
			results[question.id] = 'error'
			this.setState({
				results,
				answerState: {
					[answerId]: 'error'
				}
			})
		}
	}

	retryHandler = () => {
		this.setState({
			results: {},
			isFinished: false,
			activeQuestion: 0,
			answerState: null,
		})
	}

	async componentDidMount() {
		try {
			const response = await axios.get(`quizes/${this.props.match.params.id}.json`)
			const quiz = response.data

			this.setState({
				quiz,
				loading: false
			})
		} catch (error) {
			console.log(error)
		}
	}

	render () {
		return (
			<div className={ classes.Quiz }>
				<div className={ classes['Quiz__wrapper'] }>
					{
						this.state.isFinished
							? <FinishedQuiz
									results={ this.state.results }
									quiz={ this.state.quiz }
									onRetry={ this.retryHandler }
							/>
							: <React.Fragment>
									<h1 className={ classes['Quiz__h1'] }>Ответьте на все вопросы</h1>

									{
										this.state.loading
											? <Loader />
											: <ActiveQuiz
													question={ this.state.quiz[this.state.activeQuestion].question }
													answers={ this.state.quiz[this.state.activeQuestion].answers }
													quizLength={ this.state.quiz.length }
													activeNumber={ this.state.activeQuestion + 1 }
													state={ this.state.answerState }
													onAnswerClick={ this.onAnswerClickHandler }
												/>
									}
								</React.Fragment>
					}
				</div>
			</div>
		)
	}
}

export default Quiz
