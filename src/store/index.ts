import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { User } from '../interfaces/UserModel';

interface AppStore {
    userList: User[];
    blocked: number[];
    followed: number[];
    blockUser(userId: number): void;
    addFollow(userId: number): void;
    removeFollow(userId: number): void;
    addUsers(users: User[]): void;
}

export const useAppStore = create<AppStore>()(
    persist(
        (set) => ({
            userList: [],
            blocked: [],
            followed: [],
            addUsers: (users) => {
                set(() => ({
                    userList: [...users]
                }))
            },
            blockUser: (userId) => {
                set(state => ({
                    blocked: [...state.blocked, userId]
                }))
            },
            addFollow: (userId) => {
                set((state) => ({
                    followed: [...state.followed, userId]
                }))
            },
            removeFollow: (userId) => {
                set((state) => ({
                    followed: state.followed.filter(user => user !== userId)
                }))
            }
        }),
        {
            name: 'stack-overflow-user',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)