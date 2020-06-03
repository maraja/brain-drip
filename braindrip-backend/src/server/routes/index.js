import userRouter from './users';
import sessionRouter from './sessions';
import learningPathRouter from './learningPaths';
import learningPathResourcesRouter from './learningPathResources';
import learningBucketRouter from './learningBuckets';
import learningBucketResourcesRouter from './learningBucketResources';
import authRouter from './auth';
import downvotesRouter from './downvotes';
import upvotesRouter from './upvotes';
import favoritesRouter from './favorites';

const API_VERSION = 1
const API_PREFIX = '/v'+API_VERSION

const setupRoutes = app => {

    app.use(`${API_PREFIX}/users`, userRouter);
    app.use(`${API_PREFIX}/sessions`, sessionRouter);
    app.use(`${API_PREFIX}/auth`, authRouter);
    app.use(`${API_PREFIX}/learning-path`, learningPathRouter);
    app.use(`${API_PREFIX}/learning-path/resource`, learningPathResourcesRouter);
    app.use(`${API_PREFIX}/learning-bucket`, learningBucketRouter);
    app.use(`${API_PREFIX}/learning-bucket/resource`, learningBucketResourcesRouter);
    app.use(`${API_PREFIX}/upvotes`, upvotesRouter);
    app.use(`${API_PREFIX}/downvotes`, downvotesRouter);
    app.use(`${API_PREFIX}/favorites`, favoritesRouter);
}

export default setupRoutes;