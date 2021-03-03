import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoutes = ({ isAuthenticate, component: Component, ...rest }) => {

    return (
        <Route {...rest}
            component={(props) => (
                isAuthenticate
                    ? <Component {...props} />
                    : <Redirect to="/auth/login" />
            )}
        />
    )
};

PrivateRoutes.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
