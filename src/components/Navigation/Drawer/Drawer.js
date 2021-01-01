import React, { Component } from 'react'
import './Drawer.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [1, 2, 3]

class Drawer extends Component {
	renderLinks () {
		return links.map((link, index) => {
			return (
				<li
					key={ index }
					className="Drawer__li"
				>
					<a
						href=""
						className="Drawer__link"
					>Link { link }</a>
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
