import { Component } from 'react'
import './QuizCreator.scss'
import Button from '../../components/UI/Button/Button'
import { createControl, validate, validateForm } from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Select from '../../components/UI/Select/Select'
import { connect } from 'react-redux'
import { createQuizQuestion, finishCreateQuiz } from '../../store/actions/create'

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

class QuizCreator extends Component {
	state = {
		rightAnswerId: 1,
		isFormValid: false,
		formControls: creatFormControls()
	}

	submitHandler = event => {
		event.preventDefault()
	}

	addQuestionHandler = event => {
		event.preventDefault()

		const { question, option1, option2, option3, option4 } = this.state.formControls
		const questionItem = {
			question: question.value,
			id: this.props.quiz.length + 1,
			rightAnswerId: this.state.rightAnswerId,
			answers: [
				{
					text: option1.value,
					id: option1.id
				},
				{
					text: option2.value,
					id: option2.id
				},
				{
					text: option3.value,
					id: option3.id
				},
				{
					text: option4.value,
					id: option4.id
				}
			]
		}

		this.props.createQuizQuestion(questionItem)

		this.setState({
			rightAnswerId: 1,
			isFormValid: false,
			formControls: creatFormControls()
		})
	}

	createQuizHandler = event => {
		event.preventDefault()

		this.setState({
			rightAnswerId: 1,
			isFormValid: false,
			formControls: creatFormControls()
		})
		this.props.finishCreateQuiz()
	}

	onChangeHandler = (value, controlName) => {
		const formControls = { ...this.state.formControls }
		const control = { ...formControls[controlName] }

		control.value = value
		control.touched = true
		control.valid = validate(control.value, control.validation)

		formControls[controlName] = control

		this.setState({
			isFormValid: validateForm(formControls),
			formControls
		})
	}

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
							disabled={ !this.state.isFormValid }
							onClick={ this.addQuestionHandler }
						>Добавить вопрос</Button>
						<Button
							type="success"
							disabled={ !this.props.quiz.length }
							onClick={ this.createQuizHandler }
						>Создать тест</Button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		quiz: state.create.quiz
	}
}

function mapDispatchToProps (dispatch) {
	return {
		createQuizQuestion: item => dispatch(createQuizQuestion(item)),
		finishCreateQuiz: () => dispatch(finishCreateQuiz())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator)
