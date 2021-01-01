import { Component } from 'react'
import './Drawer.scss'

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
			<nav className={ cls.join(' ') }>
				<ul className="Drawer__ul">
					{
						this.renderLinks()
					}
				</ul>
			</nav>
		)
	}
}

export default Drawer
