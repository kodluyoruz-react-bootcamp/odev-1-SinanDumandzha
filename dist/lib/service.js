"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

 async function getData(userId) {
    const ENDPOINT = 'https://jsonplaceholder.typicode.com';

    try {
        let { data: user } = await _axios2.default.get(`${ENDPOINT}/users/${userId}`);
        let { data: posts } = await _axios2.default.get(`${ENDPOINT}/posts?userId=${userId}`);

        const userData = user;
        user.posts = posts;

        return userData;
    } catch (err) {
        console.error(err);
    }
} exports.default = getData;