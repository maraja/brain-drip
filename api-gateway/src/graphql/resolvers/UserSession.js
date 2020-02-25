import BrainDripBackend from "#root/adapters/BrainDripBackend";

const UserSession = {
    user: async userSession => {
        return await BrainDripBackend.fetchUser({ userId: userSession.userId});
    }
}   

export default UserSession;