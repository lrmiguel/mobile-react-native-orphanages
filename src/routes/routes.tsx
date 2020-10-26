import React from 'react';

import SignedInRoutes from './signedin.routes';
import SignedOutRoutes from './signedout.routes';
import AuthContext from '../contexts/AuthContext';
import { useContext } from 'react';

export default function Routes() {
    const { signed } = useContext(AuthContext);

    return (signed ? SignedInRoutes() : SignedOutRoutes());
}