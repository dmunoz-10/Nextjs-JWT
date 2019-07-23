import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <h1 className="title is-2">Authentication with Next.js and JWT</h1>
    </Layout>
)

Index.getInitialProps = function(ctx) {
    initialize(ctx);
};

export default connect(state => state)(Index);
