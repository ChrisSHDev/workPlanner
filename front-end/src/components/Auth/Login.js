import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import Grid from '@material-ui/core/Grid';

const styles = {
	textField: {
		width: '100%',
		marginBottom: 5
	},
	btnBlock: {
		textAlign: 'center',
		marginBottom: 10,
		marginTop: 20
	},
	container: {
		minHeight: 'calc(100vh - 56px)',
		'& h1': {
			fontSize: 38,
			color: '#333',
			lineHeight: '48px'
		}
	},
	submitBtn: {
		width: '100%',
		backgroundColor: 'rgb(132, 178, 76)',
		border: 'none'
	}
}

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			errors: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}

		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSubmit(e) {
		e.preventDefault()
		const userData = {
			email: this.state.email,
			password: this.state.password,
		}

		this.props.loginUser(userData)
	}
	render() {
		const { classes } = this.props;
		const { errors } = this.state
		return (
			<Grid className={classes.container} container justify="center">
			<Grid item xs={12} sm={4} style={{ marginTop: 100}}>
				<Paper style={{ padding: 15 }}>
					<h1>Log in to WorkPlanner </h1>
					<form onSubmit={this.handleSubmit}>
						<TextField
							type="email"
							label="Email"
							className={classes.textField}
							value={this.state.email}
							onChange={this.handleChange}
							name="email"
							helperText={errors.email ? errors.email : ''}
							error={errors.email ? true : false}
						/>
						<TextField
							label="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							className={classes.textField}
							helperText={errors.password ? errors.password : ''}
							error={errors.password ? true : false}
						/>
						<div className={classes.btnBlock}>
							<Button className = {classes.submitBtn } variant="outlined" type="submit">
								Submit
							</Button>
						</div>
					</form>
				</Paper>
			</Grid>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(withRouter(withStyles(styles)(Login)))