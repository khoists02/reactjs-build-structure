import domain from '../domain';
import { DASHBOARD_PATH, SIGNIN_PATH, ABOUT_ME, SKILLS, ARTICLES } from './path';

const DASHBOARD = {
  id: 1,
  component: domain.Dashboard,
  path: DASHBOARD_PATH,
  isPrivate: false,
  exact: true,
  key: 'DASHBOARD'
}

const SIGNIN = {
  id: 2,
  component: domain.SignIn,
  path: SIGNIN_PATH,
  isPrivate: false,
  exact: true,
  key: 'SIGNIN'
}

const ABOUTME = {
  id: 3,
  component: domain.AboutMe,
  path: ABOUT_ME,
  isPrivate: false,
  exact: true,
  key: 'ABOUTME'
}

const HOME = {
  id: 4,
  component: domain.Dashboard,
  path: '',
  isPrivate: false,
  exact: true,
  key: 'HOME'
}

const SKILL_MODULE = {
  id: 5,
  component: domain.Skills,
  path: SKILLS,
  isPrivate: true,
  exact: true,
  key: 'SKILL'
}

const ARTICLE_MODULE = {
  id: 6,
  component: domain.Articles,
  path: ARTICLES,
  isPrivate: false,
  exact: true,
  key: 'ARTICLES'
}

export default [DASHBOARD, SIGNIN, ABOUTME, SKILL_MODULE, ARTICLE_MODULE, HOME];