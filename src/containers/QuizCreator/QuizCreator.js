import { Component } from 'react'
import './QuizCreator.scss'
import Button from '../../components/UI/Button/Button'

export default class QuizCreator extends Component {
	submitHandler = event => {
		event.preventDefault()
	}

	addQuestionHandler = () => {}

	createQuizHandler = () => {}

	render () {
		return (
			<div className="QuizCreator">
				<div className="QuizCreator__inner">
					<h1 className="QuizCreator__h1">Создание теста</h1>
					<form
						className="QuizCreator__form"
						onSubmit={ this.submitHandler }
					>
						<input type="text"/>
						<hr />
						<input type="text"/>
						<input type="text"/>
						<input type="text"/>
						<input type="text"/>
						<select name="" id=""></select>
						<Button
							type="primary"
							onClick={ this.addQuestionHandler }
						>Добавить вопрос</Button>
						<Button
							type="success"
							onClick={ this.createQuizHandler }
						>Создать тест</Button>
					</form>
				</div>
			</div>
		)
	}
}
