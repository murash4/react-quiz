import classes from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
	<div className={ classes.ActiveQuiz }>
		<p className={ classes['ActiveQuiz__question'] }>
			<span>
				<strong>2. </strong>
				{ props.question }
			</span>
			<small>2 из 12</small>
		</p>

		<AnswersList
			answers={ props.answers }
			onAnswerClick={ props.onAnswerClick }
		/>
	</div>
)

export default ActiveQuiz
