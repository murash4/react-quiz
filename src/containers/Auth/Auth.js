import { Component } from 'react'
import './Auth.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/auth'

class Auth extends Component {
	state = {
		isFormValid: false,
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Введите корректный email',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Пароль',
				errorMessage: 'Введите корректный пароль',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			}
		}
	}

	loginHandler = () => {
		this.props.auth(
			this.state.formControls.email.value,
			this.state.formControls.password.value,
			true
		)
	}

	registerHandler = () => {
		this.props.auth(
			this.state.formControls.email.value,
			this.state.formControls.password.value,
			false
		)
	}

	submitHandler = event => {
		event.preventDefault()
	}

	validateControl (value, validation) {
		if (!validation) {
			return true
		}

		let isValid = true

		if (validation.required) {
			isValid = isValid && value.trim().length
		}

		if (validation.email) {
			isValid = isValid && is.email(value)
		}

		if (validation.minLength) {
			isValid = isValid && value.length >= validation.minLength
		}

		return isValid
	}

	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls }
		const control = { ...formControls[controlName] }

		control.value = event.target.value
		control.touched = true
		control.valid = this.validateControl(control.value, control.validation)

		formControls[controlName] = control

		let isFormValid = true

		Object.keys(formControls).forEach(name => {
			isFormValid = isFormValid && formControls[name].valid
		})

		this.setState({
			isFormValid,
			formControls
		})
	}

	renderInputs () {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName]

			return (
				<Input
					key={ controlName + index }
					type={ control.type }
					value={ control.value }
					valid={ control.valid }
					touched={ control.touched }
					label={ control.label }
					errorMessage={ control.errorMessage }
					shouldValidate={ !!control.validation }
					onChange={ event => this.onChangeHandler(event, controlName) }
				/>
			)
		})
	}

	render () {
		return (
			<div className="Auth">
				<div className="Auth__inner">
					<h1 className="Auth__h1">Авторизация</h1>
					<form
						className="Auth__form"
						onSubmit={ this.submitHandler }
					>
						{ this.renderInputs() }
						<Button
							type="success"
							disabled={ !this.state.isFormValid }
							onClick={ () => this.loginHandler() }
						>Войти</Button>
						<Button
							type="primary"
							disabled={ !this.state.isFormValid }
							onClick={ () => this.registerHandler() }
						>Зарегистрироваться</Button>
					</form>
				</div>
			</div>
		)
	}
}

function mapDispachToProps (dispatch) {
	return {
		auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
	}
}

export default connect(null, mapDispachToProps)(Auth)
