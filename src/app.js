import getData from "./lib/service.js";

async function getUserDataAndUsersPosts(userId) {
    const getUserData = await getData(userId);

    console.log(getUserData);
}

getUserDataAndUsersPosts(3);