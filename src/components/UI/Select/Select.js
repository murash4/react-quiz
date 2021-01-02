import './Select.scss'

const Select = props => {
	const htmlFor = `${props.label}-${Math.random()}`

	return (
		<div className="Select">
			<label
				htmlFor={ htmlFor }
				className="Select__label"
			>{ props.label }</label>
			<select
				id={ htmlFor }
				value={ props.value }
				className="Select__field"
				onChange={ props.onChange }
			>
				{ props.options
					.map((option, index) => {
						return (
							<option
								key={ option.value + index }
								value={ option.value }
							>{ option.text }</option>
						)
					})
				}
			</select>
		</div>
	)
}

export default Select
