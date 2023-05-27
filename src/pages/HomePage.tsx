import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import UserCard from '../components/UserCard'
import { useAppStore } from '../store'
import { User } from '../interfaces/UserModel'
import { useUsersQuery } from '../hooks/useUsersQuery'

const HomePage = () => {

    const { userList, addUsers } = useAppStore()

    const { isLoading, error, data } = useUsersQuery()

    if (userList.length < 1) {
        if (isLoading) return <>Loading Users....</>
        if (error) return <>Unable to make the request</>

        addUsers(data as User[]);
    }

    return (
        <Router>
            <CardsContainer>
                {userList.map(user => <UserCard key={user.account_id} user={user} />)}
            </CardsContainer>
        </Router>
    )
}

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    padding: 16px;
`

export default HomePage