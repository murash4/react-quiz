import { Component } from 'react'
import './QuizCreator.scss'
import Button from '../../components/UI/Button/Button'
import { createControl } from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Select from '../../components/UI/Select/Select'

function createOptionControl (number) {
	return createControl({
			id: number,
			label: `Вариант ${number}`,
			errorMessage: 'Заначение не может быть пустым'
		}, { required: true }
	)
}

function creatFormControls () {
	return {
		question: createControl({
				label: 'Введите вопрос',
				errorMessage: 'Вопрос не может быть пустым'
			}, { required: true }
		),
		option1: createOptionControl(1),
		option2: createOptionControl(2),
		option3: createOptionControl(3),
		option4: createOptionControl(4)
	}
}

export default class QuizCreator extends Component {
	state = {
		quiz: [],
		rightAnswerId: 1,
		formControls: creatFormControls()
	}

	submitHandler = event => {
		event.preventDefault()
	}

	addQuestionHandler = () => {}

	createQuizHandler = () => {}

	onChangeHandler = (value, controlName) => {}

	renderControls () {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName]

			return (
				<Auxiliary key={ controlName + index }>
					<Input
						value={ control.value }
						valid={ control.valid }
						touched={ control.touched }
						label={ control.label }
						errorMessage={ control.errorMessage }
						shouldValidate={ !!control.validation }
						onChange={ event => this.onChangeHandler(event.target.value, controlName) }
					/>
					{ index === 0 ? <hr /> : null }
				</Auxiliary>
			)
		})
	}

	selectChangeHandler = event => {
		this.setState({
			rightAnswerId: +event.target.value
		})
	}

	render () {
		const select = <Select
			label="Выберите правильный ответ"
			value={ this.state.rightAnswerId }
			options={[
				{text: 1, value: 1},
				{text: 2, value: 2},
				{text: 3, value: 3},
				{text: 4, value: 4}
			]}
			onChange={ this.selectChangeHandler }
		/>

		return (
			<div className="QuizCreator">
				<div className="QuizCreator__inner">
					<h1 className="QuizCreator__h1">Создание теста</h1>
					<form
						className="QuizCreator__form"
						onSubmit={ this.submitHandler }
					>
						{ this.renderControls() }

						{ select }

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
