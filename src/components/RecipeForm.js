import React from 'react'
import { Field, reduxForm } from 'reduxForm'
import { 
  Button,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'

const validate = values => {
	const errors = {}
	const requiredFields.forEach(field => {
		if (!values[ field ]) {
			errors[ field ] = 'Required'
		}
	})
	return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
	return (
		<FormGroup controlId={input.name} validationState={null}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type="text" {...input} />
			<HelpBlock>{touched || error}</HelpBlock>
		</FormGroup>
	)
}

class RecipeForm extends React.Component {
	render() {
		return (
			<form>
				<Field
					name="recipeTitle"
					component={renderTextField}
					label="Recipe Title" />
				<Field
					name="recipeIngredients"
					compoennt={renderTextField}
					label="Recipe Ingredients" />
			</form>
		)
	}
}