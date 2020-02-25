// import UsersService from '#root/adapters/UsersService';
import BrainDripBackend from '#root/adapters/BrainDripBackend';

const injectSession = async (req, res, next) => {
    if (req.cookies.userSessionId) {
        const userSession = await BrainDripBackend.fetchUserSession({
            sessionId: req.cookies.userSessionId
        }).catch(e => next(new Error(e)));
        res.locals.userSession = userSession;
    }
    
    return next();
}

export default injectSession;