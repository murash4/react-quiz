import { Component } from 'react'
import './Auth.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {
	loginHandler = () => {}

	registerHandler = () => {}

	submitHandler = event => {
		event.preventDefault()
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
						<Input
							label="Email"
							type="text"
						/>
						<Input
							label="Пароль"
							type="text"
							errorMessage="Тест"
						/>
						<Button
							type="success"
							onClick={ () => this.loginHandler }
						>Войти</Button>
						<Button
							type="primary"
							onClick={ () => this.registerHandler }
						>Зарегистрироваться</Button>
					</form>
				</div>
			</div>
		)
	}
}

