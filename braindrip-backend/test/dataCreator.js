<<<<<<< HEAD
import db from '#root/db';
=======
import db, { User, LearningPath, LearningPathResource, Favorites } from '#root/db';
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
import faker from 'faker';
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import accessEnv from "#root/helpers/accessEnv";

<<<<<<< HEAD
const { User, LearningPath, LearningPathResource, Favorites } = db;

// Look at this: https://stackoverflow.com/questions/49945732/one-to-one-relation-using-sequelize


const MOCK_DATA = accessEnv("MOCK_DATA", "yes");

console.log("Mock data:", MOCK_DATA)

console.log(User);

=======
// Look at this: https://stackoverflow.com/questions/49945732/one-to-one-relation-using-sequelize


const MOCK_DATA = accessEnv("MOCK_DATA", "no");

console.log("Mock data:", MOCK_DATA)

>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
const makeNewFavorites = (users, paths, num_favorites=100) => {
    let new_favorites = []
    if (!users || !paths || users.length == 0 || paths.length == 0) {
        throw new Error("no users or paths provided.")
    } else {
        for (let i = 0; i < num_favorites; i++) {
            new_favorites.push({
                id: generateUUID(),
                learningPathId: paths[Math.floor(Math.random()*paths.length)].id,
                userId: users[Math.floor(Math.random()*users.length)].id,
            })
        }
        return new_favorites
    }
}

const makeNewResources = (paths, num_resources=200) => {
    let new_resources = []
    if (!paths || paths.length == 0) {
        throw new Error("no paths provided.")
    } else {
        for (let i = 0; i < num_resources; i++) {
            new_resources.push({
                id: generateUUID(),
                url: faker.internet.url(),
                description: faker.lorem.paragraph(),
                topic: faker.lorem.word(),
                learningPathId: paths[Math.floor(Math.random()*paths.length)].id
            })
        }
        return new_resources
    }
}

const makeNewPaths = (num_paths=20, users) => {
    let new_paths = []
    if (!users || users.length == 0) {
        throw new Error("no users provided.")
    } else {
        for (let i = 0; i < num_paths; i++) {
            new_paths.push({
                id: generateUUID(),
                name: faker.lorem.sentence(),
                description: faker.lorem.paragraph(),
                difficulty: "beginner",
                userId: users[Math.floor(Math.random()*users.length)].id
            })
        }
        return new_paths
    }
}

const makeNewUsers = (num_users=20) => {
    let new_users = []
    for (let i = 0; i < num_users; i++) {
        new_users.push({
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            profilePicture: faker.image.avatar(),
            id: generateUUID(),
            passwordHash: hashPassword("password")
        })
    }
    return new_users;
}

<<<<<<< HEAD
if (MOCK_DATA) {
=======
if (MOCK_DATA == "yes") {
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af

    const NUM_NEW_USERS = 20
    const NUM_NEW_RESOURCES = 100

    let new_users = makeNewUsers(NUM_NEW_USERS);
    let new_paths = makeNewPaths(20, new_users);
    let new_resources = makeNewResources(new_paths);
<<<<<<< HEAD
    // let new_favorites = makeNewFavorites(new_users, new_paths);
=======
    let new_favorites = makeNewFavorites(new_users, new_paths);
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af

    // console.log(new_paths)

    for (let i = 0; i < NUM_NEW_RESOURCES; i++) {

    }

    (async () => {
        try {
            let newUsers = await User.bulkCreate(new_users);
            let newPaths = await LearningPath.bulkCreate(new_paths);
            let newResources = await LearningPathResource.bulkCreate(new_resources);
<<<<<<< HEAD
            // let newFavorites = await Favorites.bulkCreate(new_favorites);
            newUsers = newUsers.map(u => u.get())
            newPaths = newPaths.map(p => p.get())
            newResources = newResources.map(p => p.get())
            // newFavorites = newFavorites.map(f => f.get())
=======
            let newFavorites = await Favorites.bulkCreate(new_favorites);
            newUsers = newUsers.map(u => u.get())
            newPaths = newPaths.map(p => p.get())
            newResources = newResources.map(p => p.get())
            newFavorites = newFavorites.map(f => f.get())
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af

            // console.log(newPaths)
        } catch(err) {
            console.log("Error while user creation : ", err);
        }
    })()

}

