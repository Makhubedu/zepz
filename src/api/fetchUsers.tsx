import { User } from "../interfaces/UserModel";

export const fetchAllUsers = async (): Promise<User[]> => {
    const data = await fetch(`http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`)
    const jsonData = await data.json()

    return jsonData.items
}

export const fetchSingleUser = async (userId: string) => {
    const response = await fetch(`https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`);
    const data = await response.json();
    const user = data.items[0];
    return user;
};