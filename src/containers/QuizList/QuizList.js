import { Component } from 'react'
import "./QuizList.scss"
import { NavLink } from 'react-router-dom'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

export default class QuizList extends Component {
	state = {
		quizes: [],
		loading: true
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
			const response = await axios.get('quizes.json')
			const quizes = []

			Object.keys(response.data).forEach((key, index) => {
				quizes.push({
					id: key,
					name: `Тест №${index + 1}`
				})
			})

			this.setState({
				quizes,
				loading: false
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

					{
						this.state.loading
							? <Loader />
							: <ul className="QuizList__ul">
									{ this.renderQuizes() }
								</ul>
					}
				</div>
			</div>
		)
	}
}
