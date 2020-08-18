import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createUserSessionResolver = async (obj, { email, password }, context) => {
    const userSession = await BrainDripBackend.createUserSession({ email, password });

    // http only cookies cannot be accessed by browsers (i.e., not sent to JavaScript)
    // this adds a little bit of security so users cannot delete/hack the system.
    context.res.cookie("userSessionId", userSession.id, { httpOnly: true });

    return userSession;
}

export default createUserSessionResolver;