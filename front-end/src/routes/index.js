import domain from '../domain';
import { DASHBOARD_PATH, SIGNIN_PATH, ABOUT_ME, SKILLS, ARTICLES, ADMIN, AUTHENTICATE_ADMIN } from './path';

const DASHBOARD = {
  id: 1,
  component: domain.Dashboard,
  path: DASHBOARD_PATH,
  isPrivateDashboard: false,
  isPrivateAdmin: false,
  exact: true,
  key: 'DASHBOARD'
}

const SIGNIN = {
  id: 2,
  component: domain.SignIn,
  path: SIGNIN_PATH,
  isPrivateDashboard: false,
  isPrivateAdmin: false,
  exact: true,
  key: 'SIGNIN'
}

const ABOUTME = {
  id: 3,
  component: domain.AboutMe,
  path: ABOUT_ME,
  isPrivateDashboard: false,
  isPrivateAdmin: false,
  exact: true,
  key: 'ABOUTME'
}

const HOME = {
  id: 4,
  component: domain.Dashboard,
  path: '',
  isPrivateDashboard: false,
  isPrivateAdmin: false,
  exact: true,
  key: 'HOME'
}

const SKILL_MODULE = {
  id: 5,
  component: domain.Skills,
  path: SKILLS,
  isPrivateDashboard: true,
  isPrivateAdmin: false,
  exact: true,
  key: 'SKILL'
}

const ARTICLE_MODULE = {
  id: 6,
  component: domain.Articles,
  path: ARTICLES,
  isPrivateDashboard: false,
  isPrivateAdmin: false,
  exact: true,
  key: 'ARTICLES'
}

const ADMIN_MODULE = {
  id: 6,
  component: domain.Admin,
  path: ADMIN,
  isPrivateDashboard: false,
  isPrivateAdmin: true,
  exact: true,
  key: 'ADMIN'
}

const AUTHEN_ADMIN = {
  id: 6,
  component: domain.AuthenAdmin,
  path: AUTHENTICATE_ADMIN,
  isPrivateDashboard: false,
  isPrivateAdmin: false,
  exact: true,
  key: 'AUTHEN_ADMIN'
}

export default [DASHBOARD, SIGNIN, ABOUTME, SKILL_MODULE, ARTICLE_MODULE, ADMIN_MODULE , AUTHEN_ADMIN, HOME];