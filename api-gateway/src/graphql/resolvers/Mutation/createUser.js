import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createUserResolver = async (obj, { email, password, firstName, lastName }) => {
    return await BrainDripBackend.createUser({ email, password, firstName, lastName });
}

export default createUserResolver;