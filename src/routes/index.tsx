import React from 'react'

import HomePage from '../pages/HomePage'
import UserDetailsCard from '../components/UserDetailsCard';

const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <></>,
    },
    {
        path: 'user/:id',
        element: <UserDetailsCard />
    }
]

export default routes;