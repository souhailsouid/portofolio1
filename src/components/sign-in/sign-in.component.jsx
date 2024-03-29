import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss'

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	handleSubmit = async (event) => {
		event.preventDefault()
		const { emailSignInStart } = this.props
		const { email, password } = this.state
		emailSignInStart(email, password)

		// try {
		// 	await auth.signInWithEmailAndPassword(email, password)
		// 	this.setState({ email: '', password: '' })
		// } catch (error) {
		// 	console.log(error)
		// }
	}
	handleChange = (event) => {
		const { value, name } = event.target
		this.setState({ [name]: value })
	}

	render() {
		const { googleSignInStart } = this.props
		return (
			<div className="sign-in">
				<h2> I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						label="email"
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButtom type="submit">Sign in</CustomButtom>
						<CustomButtom type="button" onClick={googleSignInStart} isGoogleSignIn>
							{' '}
							Sign in with Google
						</CustomButtom>
					</div>
				</form>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn)
