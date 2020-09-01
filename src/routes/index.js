import domain from '../domain';
import { DASHBOARD_PATH, SIGNIN_PATH } from './path';

const DASHBOARD = {
  component: domain.Dashboard,
  path: DASHBOARD_PATH,
  isPrivate: false,
}

const SIGNIN = {
  component: domain.SignIn,
  path: SIGNIN_PATH,
  isPrivate: false,
}

const HOME = {
  component: domain.Dashboard,
  path: '',
  isPrivate: false,
}

export default [DASHBOARD, SIGNIN, HOME]