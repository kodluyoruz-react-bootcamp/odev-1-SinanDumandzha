"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _servicejs = require('./lib/service.js'); var _servicejs2 = _interopRequireDefault(_servicejs);

async function getUserDataAndUsersPosts(userId) {
    const getUserData = await _servicejs2.default.call(void 0, userId);

    console.log(getUserData);
}

getUserDataAndUsersPosts(3);