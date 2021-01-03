import { Component } from 'react'
import './QuizList.scss'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchQuizes } from '../../store/actions/quiz'

class QuizList extends Component {
	renderQuizes () {
		return this.props.quizes.map(quiz => {
			return (
				<li
					key={ quiz.id }
					className="QuizList__li"
				>
					<NavLink
						to={ '/quiz/' + quiz.id }
						className="QuizList__link"
					>
						{ quiz.name }
					</NavLink>
				</li>
			)
		})
	}

	componentDidMount() {
		this.props.fetchQuizes()
	}

	render () {
		return (
			<div className="QuizList">
				<div>
					<h1 className="QuizList__h1">Список тестов</h1>

					{
						this.props.loading && this.props.quizes.length
							? <Loader />
							: <ul className="QuizList__ul">
									{ this.renderQuizes() }
								</ul>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		quizes: state.quiz.quizes,
		loading: state.quiz.loading
	}
}

function mapDispatchToProps (dispatch) {
	return {
		fetchQuizes: () => dispatch(fetchQuizes())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
