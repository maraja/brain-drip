import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getUserResolver = async (obj, { id }) => {
    console.log(id)
    return await BrainDripBackend.fetchUser({ id });
}

export default getUserResolver;