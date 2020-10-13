import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { useSelector } from "react-redux";
import Layout from './container/Layout/Layout';
import {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  HOME_PAGE,
  SINGLE_LEARNING_PATH,
  LEARNING_PATHS,
  SEARCH_LEARNING_PATH_RESULT,
  USER_LEARNING_PATHS,
  CREATE_LEARNING_PATH,
  EDIT_LEARNING_PATH,
  USER_LEARNING_BUCKETS,
  CREATE_LEARNING_BUCKET,
  EDIT_LEARNING_BUCKET,
  SINGLE_LEARNING_BUCKET,
  PRIVACY_PAGE,
  FORGET_PASSWORD_PAGE,  
  USER_PROFILE_PAGE,
  USER_ACCOUNT_SETTINGS_PAGE,
} from './settings/constant';
/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: HOME_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Home" */ './components/Root/Home'),
      loading: Loading,
      modules: ['Home'],
    }),
    exact: true,
  },
  {
    path: LOGIN_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Login" */ './container/Auth/SignIn/SignIn'
        ),
      loading: Loading,
      modules: ['Login'],
    }),
  },
  {
    path: REGISTRATION_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Registration" */ './container/Auth/SignUp/SignUp'
        ),
      loading: Loading,
      modules: ['Registration'],
    }),
  },
  {
    path: FORGET_PASSWORD_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ './container/Auth/ForgetPassword'
        ),
      loading: Loading,
      modules: ['ForgetPassword'],
    }),
  },
  {
    path: `${SINGLE_LEARNING_PATH}/:id`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SingleLearningPath" */ './components/Root/LearningPath/LearningPathDetails'
        ),
      loading: Loading,
      modules: ['SingleLearningPath'],
    }),
  },
  {
    path: LEARNING_PATHS,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "LearningPaths" */ './container/LearningPath/LearningPath'),
      loading: Loading,
      modules: ['LearningPaths'],
    }),
  },
  {
    path: `${SEARCH_LEARNING_PATH_RESULT}/:searchString`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SearchLearningPath" */ './components/Root/LearningPath/LearningPathsSearchResult'
        ),
      loading: Loading,
      modules: ['SearchLearningPath'],
    }),
  },
  {
    path: PRIVACY_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "privacy" */ './container/Privacy/Privacy'),
      loading: Loading,
      modules: ['Privacy'],
    }),
  },
];

/**
 *
 * Protected Route Component
 *
 */
const UsesProfilePage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "UserDetailsViewPage" */ './container/User/AccountDetails/UserDetailsViewPage'
    ),
  loading: Loading,
  modules: ['UserDetailsViewPage'],
});

const UserAccountSettingsPage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "UserAccountSettingsPage" */ './container/User/AccountSettings/UserAccountSettingsPage'
    ),
  loading: Loading,
  modules: ['UserAccountSettingsPage'],
});

const CreateLearningPath = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "CreateLearningPath" */ './components/Root/LearningPath/LearningPathCreate'
    ),
  loading: Loading,
  modules: ['CreateLearningPath'],
});
const EditLearningPath = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "EditLearningPath" */ './components/Root/LearningPath/LearningPathEdit'
    ),
  loading: Loading,
  modules: ['EditLearningPath'],
});

const CreateLearningBucket = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "CreateLearningBucket" */ './components/Root/LearningBucket/LearningBucketCreate'
    ),
  loading: Loading,
  modules: ['CreateLearningBucket'],
});
const EditLearningBucket = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "EditLearningBucket" */ './components/Root/LearningBucket/LearningBucketEdit'
    ),
  loading: Loading,
  modules: ['EditLearningBucket'],
});

const SingleLearningBucket = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "SingleLearningBucket" */ './components/Root/LearningBucket/LearningBucketDetails'
    ),
  loading: Loading,
  modules: ['SingleLearningBucket'],
});

/**
 *
 * Not Found Route Component
 *
 */

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFound" */ './container/404/404'),
  loading: Loading,
  modules: ['NotFound'],
});

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user: reduxUser } = useSelector(state => state.user);
  
  return (
    <Route
      render={(props) =>
        reduxUser ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
      }
      {...rest}
    />
  );
};

/**
 *
 * Overall Router Component
 *
 */

const Routes = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <ProtectedRoute path={USER_PROFILE_PAGE} component={UsesProfilePage} />
        <ProtectedRoute path={CREATE_LEARNING_PATH} component={CreateLearningPath} />
        <ProtectedRoute path={`${EDIT_LEARNING_PATH}/:id`} component={EditLearningPath} />
        <ProtectedRoute path={CREATE_LEARNING_BUCKET} component={CreateLearningBucket} />
        <ProtectedRoute path={`${EDIT_LEARNING_BUCKET}/:id`} component={EditLearningBucket} />
        <ProtectedRoute path={`${SINGLE_LEARNING_BUCKET}/:id`} component={SingleLearningBucket} />
        <ProtectedRoute
          path={USER_ACCOUNT_SETTINGS_PAGE}
          component={UserAccountSettingsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
