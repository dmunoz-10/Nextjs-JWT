import { connect } from 'react-redux';
import { API } from '../config';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import axios from 'axios'

const Me = ({user}) => {
    const title = user ? user.username : 'Stranger'
    return (
        <Layout title={title}>
            {(user && (
                <div>
                    <h2>User: {user.username}</h2>
                    <h3>DATA:</h3>
                    <ul>
                        <li>ID: {user.id}</li>
                        <li>First Name: {user.first_name}</li>
                        <li>Last Name: {user.last_name}</li>
                        <li>Gender: {user.gender === 'rather_not_to_say' ? <span className="badge badge-secondary">
                            rather not to say
                        </span> : user.gender}</li>
                        <li>Email: {user.email}</li>
                        <li>Birth Date: {user.birth_date || <span className="badge badge-secondary">
                            Empty
                        </span>}</li>
                        <li>Phone Number: {user.phone_number}</li>
                    </ul>
                </div>
            )) || (
                <div>
                    <h2>Stranger</h2>
                    <h4>You are not authenticated :c</h4>
                </div>
            )}
        </Layout>
    )
};

Me.getInitialProps = async (ctx) => {
    initialize(ctx);
    const token = ctx.store.getState().authentication.token;
    if (token) {
        const response = await axios.get(`${API}/user/me`, {
            headers: {
                Authorization: token
            }
        });
        const user = await response.data.user;
        return { user };
    }
};

export default connect(state => state)(Me);