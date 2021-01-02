import { Component } from 'react'
import "./QuizList.scss"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class QuizList extends Component {
	renderQuizes () {
		return [1, 2, 3].map((quiz, index) => {
			return (
				<li
					key={ index }
					className="QuizList__li"
				>
					<NavLink
						to={ '/quiz/' + quiz }
						className="QuizList__link"
					>
						Тест { quiz }
					</NavLink>
				</li>
			)
		})
	}

	render () {
		return (
			<div className="QuizList">
				<div>
					<h1 className="QuizList__h1">Список тестов</h1>

					<ul className="QuizList__ul">
						{ this.renderQuizes() }
					</ul>
				</div>
			</div>
		)
	}
}
