import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getUserResolver = async (obj, { id }) => {
    return await BrainDripBackend.fetchUser({ id });
}

export default getUserResolver;