import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import { render } from "@testing-library/react"
import { useUsersQuery } from "../hooks/useUsersQuery"
import HomePage from './HomePage'

const mockedUseUsersQuery: any = useUsersQuery
jest.mock("../hooks/useUsersQuery")

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default wrapper

describe("HomePage Component", () => {
  it("Displays the loading view", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      isLoading: true,
    }))

    const {isLoading} = useUsersQuery()
    render(<HomePage />, { wrapper })
    expect(isLoading).toBe(true)
  })

  it("Displays the error message", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      error: true,
    }))
    const {error} = useUsersQuery()
    render(<HomePage />, { wrapper })
    expect(error).toBe(true)
  })

  it("should render users list", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      isLoading: false,
      error: false,
      data: [
        {
          badge_counts: { bronze: 5, silver: 10, gold: 3 },
          account_id: 1,
          is_employee: false,
          last_modified_date: 1635000000,
          last_access_date: 1635100000,
          reputation_change_year: 100,
          reputation_change_quarter: 50,
          reputation_change_month: 20,
          reputation_change_week: 10,
          reputation_change_day: 5,
          reputation: 1000,
          creation_date: 1630000000,
          user_type: 'registered',
          user_id: 123,
          location: 'New York',
          link: 'https://example.com',
          profile_image: 'https://example.com/profile.jpg',
          display_name: 'John Doe',
        },
        {
          badge_counts: { bronze: 2, silver: 8, gold: 1 },
          account_id: 2,
          is_employee: true,
          last_modified_date: 1635000000,
          last_access_date: 1635100000,
          reputation_change_year: 80,
          reputation_change_quarter: 40,
          reputation_change_month: 15,
          reputation_change_week: 8,
          reputation_change_day: 3,
          reputation: 800,
          creation_date: 1630000000,
          user_type: 'moderator',
          user_id: 456,
          location: 'London',
          link: 'https://example.com',
          profile_image: 'https://example.com/profile.jpg',
          display_name: 'Jane Smith',
        },  
      ],
    }))

    const { data } = useUsersQuery()
    render(<HomePage />, { wrapper })
    expect(data?.length).toBe(2)
  })
})