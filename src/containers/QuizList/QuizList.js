import { Component } from 'react'
import "./QuizList.scss"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class QuizList extends Component {
	state = {
		quizes: []
	}
	renderQuizes () {
		return this.state.quizes.map(quiz => {
			return (
				<li
					key={ quiz.id }
					className="QuizList__li"
				>
					<NavLink
						to={ '/quiz/' + quiz.id }
						className="QuizList__link"
					>
						{ quiz.name }
					</NavLink>
				</li>
			)
		})
	}

	async componentDidMount() {
		try {
			const response = await axios.get('https://react-quiz-93710-default-rtdb.firebaseio.com/quizes.json')
			const quizes = []

			Object.keys(response.data).forEach((key, index) => {
				quizes.push({
					id: key,
					name: `Тест №${index + 1}`
				})
			})

			this.setState({
				quizes
			})
		} catch (error) {
			console.log(error)
		}
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
