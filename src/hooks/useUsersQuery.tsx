import { useQuery } from '@tanstack/react-query'

import { fetchAllUsers } from '../api/fetchUsers'


export const useUsersQuery = () => {
    const results = useQuery({
        queryKey: ['FetchAllUsers'],
        queryFn: fetchAllUsers
    })
    return results;
};