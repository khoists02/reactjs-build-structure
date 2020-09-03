import domain from '../domain';
import { DASHBOARD_PATH, SIGNIN_PATH, ABOUT_ME } from './path';

const DASHBOARD = {
  component: domain.Dashboard,
  path: DASHBOARD_PATH,
  isPrivate: false,
  exact: true,
}

const SIGNIN = {
  component: domain.SignIn,
  path: SIGNIN_PATH,
  isPrivate: false,
  exact: true,
}

const ABOUTME = {
  component: domain.AboutMe,
  path: ABOUT_ME,
  isPrivate: false,
  exact: false,
}

const HOME = {
  component: domain.Dashboard,
  path: '',
  isPrivate: false,
}

export default [DASHBOARD, SIGNIN, HOME, ABOUTME]