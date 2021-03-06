/* eslint-disable import/no-cycle */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Register from '@/views/Register.vue';
// import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import secureLS from '@/storage';
import { analytics } from '@/firebaseConfig';
import EventsList from '../views/EventsList.vue';
import EventEditor from '../views/EventEditor.vue';
import EventRequest from '../views/EventRequest.vue';
import ContactInfo from '../views/ContactInfo.vue';
import WhitelistView from '../views/Whitelist.vue';
import Hub from '../views/Hub.vue';
import CalendarHub from '../views/CalendarHub.vue';
import Notes from '../views/Notes.vue';
import AdminPanel from '../views/AdminPanel.vue';
import LinkUsers from '../views/LinkUsers.vue';
import ExercisesHub from '../views/ExercisesHub.vue';
import CalculGame from '../views/CalculGame.vue';
import SimonSays from '../views/SimonSays.vue';

import store from '../store';

import { requiresAdminOrAbove } from './access-rules';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'hub',
    component: Hub,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/contact-info',
    name: 'contact-info',
    component: ContactInfo,
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes,
  },
  {
    path: '/admin',
    component: AdminPanel,
    beforeEnter: requiresAdminOrAbove,
    children: [
      {
        path: 'whitelist',
        component: WhitelistView,
      },
      {
        path: 'link-users',
        component: LinkUsers,
      },
      {
        path: '',
        redirect: 'whitelist',
      },
    ],
  },
  {
    path: '/calendar',
    name: 'calendar-hub',
    component: CalendarHub,
  },
  {
    path: '/calendar/my-events',
    name: 'my-events',
    component: EventsList,
  },
  {
    path: '/calendar/event-editor/:id',
    name: 'event editor',
    component: EventEditor,
  },
  {
    path: '/calendar/event-requests',
    name: 'event requests',
    component: EventRequest,
  },
  {
    path: '/exercises',
    name: 'exercises-hub',
    component: ExercisesHub,
  },
  {
    path: '/exercises/calcul-game',
    name: 'calcul game',
    component: CalculGame,
  },
  {
    path: '/exercises/simon',
    name: 'simon-says',
    component: SimonSays,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  // Global check if user trys to access app without logged in
  if (to.path !== '/login' && to.path !== '/register') {
    if (!store.getters['auth/isLoggedIn']) next('/login');
  }
  next();
});

// Persist displayed route after each route change
router.afterEach((to) => {
  if (to.name) {
    analytics().setCurrentScreen(to.name);
  }
  secureLS.set('current-route', to);
});

export default router;
