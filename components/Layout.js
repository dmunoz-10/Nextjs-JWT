import { Fragment } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { connect } from 'react-redux'
import actions from '../redux/actions'


const Layout = ({ children, title, isAuthenticated, deauthenticate }) => {
    const appName = 'NextJS-JWT'
    const titleHead = title ? `${title} - ${appName}` : appName;

    return (
        <Fragment>
            <Head>
                <title>{titleHead}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            </Head>
            <Navbar 
                appName={appName}
                isAuthenticated={isAuthenticated}
                deauthenticate={deauthenticate}
            />
            <div className="container">
                {children}
            </div>
        </Fragment>
    )
}

const mapStoreToProps = (state) => (
    { isAuthenticated: !!state.authentication.token }
);

export default connect(mapStoreToProps, actions)(Layout); 