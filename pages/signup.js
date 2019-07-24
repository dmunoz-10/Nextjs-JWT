import { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            gender: 0,
            email: '',
            password: '',
            password_confirmation: '',
            birth_date: '',
            phone_number: ''
        }
    }

    static getInitialProps(ctx) {
        initialize(ctx);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.register({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            gender: parseInt(this.state.gender),
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            birth_date: this.state.birth_date,
            phone_number: this.state.phone_number
        }, 'signup');
    }

    render() {
        return (
            <Layout title = "Sign Up">
                <h2>Sign Up</h2>
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="container"
                >
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                            required
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                            required
                            name="last_name"
                            value={this.state.last_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            required
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            className="form-control"
                            required
                            name="gender"
                            onChange={this.handleChange}
                            value={this.state.gender}
                        >
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Transgender</option>
                            <option value="3">Transsexual</option>
                            <option value="4">Rather Not To say</option>
                            <option value="5">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="date"
                            placeholder="Birth Date"
                            name="birth_date"
                            value={this.state.birth_date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Phone Number"
                            required
                            name="phone_number"
                            value={this.state.phone_number}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            required
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            required
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password Confirmation"
                            required
                            name="password_confirmation"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>
            </Layout>
        )
    }
}

export default connect(state => state, actions)(Signup);