import { Component } from 'react'
import classes from './Layout.module.scss'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import { connect } from 'react-redux'

class Layout extends Component {
	state = {
		menu: false
	}

	toggleMenuHandler = () => {
		this.setState({
				menu: !this.state.menu
		})
	}

	menuCloseHandler = () => {
		this.setState({
			menu: false
		})
	}

	render () {
		return (
			<div className={ classes.Layout }>
				<Drawer
					isOpen={ this.state.menu }
					isAuthenticated={ this.props.isAuthenticated }
					onClose={ this.menuCloseHandler }
				/>

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

function mapStateToProps (state) {
	return {
		isAuthenticated: !!state.auth.token
	}
}

export default connect(mapStateToProps)(Layout)
