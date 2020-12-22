import axios from "axios";

export default async function getData(userId) {
    const ENDPOINT = 'https://jsonplaceholder.typicode.com';

    try {
        let { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
        let { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${userId}`);

        const userData = user;
        user.posts = posts;

        return userData;
    } catch (err) {
        console.error(err);
    }
}