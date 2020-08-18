import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getUsersResolver = async (obj) => {
    return await BrainDripBackend.fetchUsers();
}

export default getUsersResolver;