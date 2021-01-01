import './FinishedQuiz.scss'
import React from "react";

const FinishedQuiz = props => {
	return (
		<div className="FinishedQuiz">
			<ul className="FinishedQuiz__ul">
				<li className="FinishedQuiz__li">
					<strong>1. </strong>
					Название вопроса
					<i className="FinishedQuiz__i fa fa-times error"></i>
				</li>
				<li className="FinishedQuiz__li">
					<strong>1. </strong>
					Название вопроса
					<i className="FinishedQuiz__i fa fa-check success"></i>
				</li>
			</ul>

			<p>Правильно 4 из 10</p>

			<div>
				<button>Повторить</button>
			</div>
		</div>
	)
}

export default FinishedQuiz
