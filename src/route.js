import React from 'react';

const SignUp = React.lazy(() => import('views/Authentication/SignUp'));
const SignIn = React.lazy(() => import('views/Authentication/SignIn'));

const route = [
  { path: '/register', exact: true, name: 'Signup', component: SignUp },
  { path: '/login', exact: true, name: 'Signin', component: SignIn },
];

export default route;
