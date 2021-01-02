import React, { Component } from 'react'
import './Drawer.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

const links = [
	{
		to: '/',
		label: 'Список'
	},
	{
		to: '/auth',
		label: 'Авторизация'
	},
	{
		to: '/quiz-creator',
		label: 'Создать тест'
	}
]

class Drawer extends Component {
	clickHandler = () => {
		this.props.onClose()
	}

	renderLinks () {
		return links.map((link, index) => {
			return (
				<li
					key={ index }
					className="Drawer__li"
				>
					<NavLink
						to={ link.to }
						className="Drawer__link"
						onClick={ this.clickHandler }
					>{ link.label }</NavLink>
				</li>
			)
		})
	}

	render () {
		const cls = [
			'Drawer',
			!this.props.isOpen ? 'close' : ''
		]

		return (
			<React.Fragment>
				{ this.props.isOpen
					? <Backdrop
							onClick={ this.props.onClose }
						/>
					: null }

				<nav className={ cls.join(' ') }>
					<ul className="Drawer__ul">
						{
							this.renderLinks()
						}
					</ul>
				</nav>
			</React.Fragment>
		)
	}
}

export default Drawer
