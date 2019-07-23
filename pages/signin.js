import { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions'
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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
        this.props.authenticate({
            email: this.state.email,
            password: this.state.password
        }, 'signin');
    }

    render() {
        return (
            <Layout title="Sign In">
                <h2>Sign In</h2>
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="container"
                >
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
                    <div>
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </div>
                </form>
            </Layout>
        )
    }
}

export default connect(state => state, actions)(Signin);
