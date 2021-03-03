import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes = ({ isAuthenticate, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            component={(props) => (
                !isAuthenticate
                    ? <Component {...props} />
                    : <Redirect to="/" />
            )}
        />
    );
}

PublicRoutes.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
