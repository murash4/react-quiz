import { Component } from 'react'
import './Layout.scss'

class Layout extends Component {
	render () {
		return (
			<div>
				<main>
					{ this.props.children }
				</main>
			</div>
		)
	}
}
export default Layout
