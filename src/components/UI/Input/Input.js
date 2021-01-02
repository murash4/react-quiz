import './Input.scss'

function isInvalid ({ valid, touched, shouldValidate }) {
	return !valid && shouldValidate && touched
}

const Input = props => {
	const inputType = props.type || 'text'
	const cls = ['Input']
	const htmlFor = `${inputType}-${Math.random()}`

	if (isInvalid(props)) {
		cls.push('invalid')
	}

	return (
		<div className={ cls.join(' ') }>
			<label
				htmlFor={ htmlFor }
				className="Input__label"
			>{ props.label }</label>
			<input
				id={ htmlFor }
				className="Input__field"
				type={ inputType }
				value={ props.value }
				onChange={ props.onChange }
			/>
			{
				isInvalid(props)
					? <span className="Input__error">{ props.errorMessage || 'Введите верное значение' }</span>
					: null
			}
		</div>
	)
}

export default Input
