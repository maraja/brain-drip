import userRouter from './users';
import sessionRouter from './sessions';
import learningPathRouter from './learningPaths';
import learningPathResourcesRouter from './learningPathResources';
import authRouter from './auth';

const API_VERSION = 1
const API_PREFIX = '/v'+API_VERSION

const setupRoutes = app => {

    app.use(`${API_PREFIX}/users`, userRouter);
    app.use(`${API_PREFIX}/sessions`, sessionRouter);
    app.use(`${API_PREFIX}/auth`, authRouter);
    app.use(`${API_PREFIX}/learning-path`, learningPathRouter);
    app.use(`${API_PREFIX}/learning-path/resource`, learningPathResourcesRouter);
}

export default setupRoutes;