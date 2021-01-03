import React, { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../store/actions/quiz'

class Quiz extends Component {
	async componentDidMount() {
		this.props.fetchQuizById(this.props.match.params.id)
	}

	componentWillUnmount() {
		this.props.retryQuiz()
	}

	render () {
		return (
			<div className={ classes.Quiz }>
				<div className={ classes['Quiz__wrapper'] }>
					{
						this.props.isFinished
							? <FinishedQuiz
									results={ this.props.results }
									quiz={ this.props.quiz }
									onRetry={ this.props.retryQuiz }
							/>
							: <React.Fragment>
									<h1 className={ classes['Quiz__h1'] }>Ответьте на все вопросы</h1>

									{
										this.props.loading || !this.props.quiz
											? <Loader />
											: <ActiveQuiz
													question={ this.props.quiz[this.props.activeQuestion].question }
													answers={ this.props.quiz[this.props.activeQuestion].answers }
													quizLength={ this.props.quiz.length }
													activeNumber={ this.props.activeQuestion + 1 }
													state={ this.props.answerState }
													onAnswerClick={ this.props.quizAnswerClick }
												/>
									}
								</React.Fragment>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		results: state.quiz.results,
		isFinished: state.quiz.isFinished,
		activeQuestion: state.quiz.activeQuestion,
		answerState: state.quiz.answerState,
		quiz: state.quiz.quiz,
		loading: state.quiz.loading
	}
}

function mapDispatchToProps (dispatch) {
	return {
		fetchQuizById: id => dispatch(fetchQuizById(id)),
		quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
		retryQuiz: () => dispatch(retryQuiz())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
