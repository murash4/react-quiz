import classes from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
	<div className={ classes.ActiveQuiz }>
		<p className={ classes['ActiveQuiz__question'] }>
			<span>
				<strong>2. </strong>
				Как дела?
			</span>
			<small>4 из 12</small>
		</p>

		<AnswersList
			answers={ props.answers }
		/>
	</div>
)

export default ActiveQuiz
