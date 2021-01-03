import React, { Component } from 'react'
import './Drawer.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

class Drawer extends Component {
	clickHandler = () => {
		this.props.onClose()
	}

	renderLinks (links) {
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

		const links = [
			{
				to: '/',
				label: 'Список'
			}
		]

		if (this.props.isAuthenticated) {
			links.push(
				{
					to: '/quiz-creator',
					label: 'Создать тест'
				}
			)
			links.push(
				{
					to: '/logout',
					label: 'Выход'
				}
			)
		} else {
			links.push(
				{
					to: '/auth',
					label: 'Авторизация'
				}
			)
		}

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
							this.renderLinks(links)
						}
					</ul>
				</nav>
			</React.Fragment>
		)
	}
}

export default Drawer
