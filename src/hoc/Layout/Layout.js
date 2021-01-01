import { Component } from 'react'
import classes from './Layout.module.scss'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'

class Layout extends Component {
	state = {
		menu: false
	}

	toggleMenuHandler = () => {
		this.setState({
				menu: !this.state.menu
		})
	}

	render () {
		return (
			<div className={ classes.Layout }>
				<MenuToggle
					isOpen={ this.state.menu }
					onToggle={ this.toggleMenuHandler }
				/>

				<main className={ classes['Layout-main'] }>
					{ this.props.children }
				</main>
			</div>
		)
	}
}
export default Layout
