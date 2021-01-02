import './FinishedQuiz.scss'
import React from 'react'
import Button from "../UI/Button/Button"
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === 'success') {
			total++
		}

		return total
	}, 0)

	return (
		<div className="FinishedQuiz">
			<ul className="FinishedQuiz__ul">
				{ props.quiz.map((quizItem, index) => {
					const cls = [
						'FinishedQuiz__i fa',
						props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
						props.results[quizItem.id]
					]

					return (
						<li
							key={ index }
							className="FinishedQuiz__li"
						>
							<strong>{ index + 1 }. </strong>
							{ quizItem.question }
							<i className={ cls.join(' ') } />
						</li>
					)
				}) }
			</ul>

			<p>Правильно { successCount } из { props.quiz.length }</p>

			<div>
				<Button
					type="primary"
					onClick={ props.onRetry }
				>
					Повторить
				</Button>
				<Link to="/">
					<Button
						type="success"
					>
						Перейти в список тестов
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default FinishedQuiz
