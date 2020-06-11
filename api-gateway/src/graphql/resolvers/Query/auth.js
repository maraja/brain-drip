import BrainDripBackend from "#root/adapters/BrainDripBackend";

const userLoginResolver = async (obj, { email, password }) => {
    return await BrainDripBackend.loginUser({ email, password });
}

// const userSignup = async (obj, { id }) => {
//     return await BrainDripBackend.fetchUser({ id });
// }

export default userLoginResolver