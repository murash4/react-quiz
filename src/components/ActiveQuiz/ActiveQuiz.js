import classes from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
	<div className={ classes.ActiveQuiz }>
		<p className={ classes['ActiveQuiz__question'] }>
			<span>
				<strong>{ props.activeNumber }. </strong>
				{ props.question }
			</span>
			<small>{ props.activeNumber } из { props.quizLength }</small>
		</p>

		<AnswersList
			answers={ props.answers }
			state={ props.state }
			onAnswerClick={ props.onAnswerClick }
		/>
	</div>
)

export default ActiveQuiz
