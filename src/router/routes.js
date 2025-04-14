const routes = [
  { 
    path: '/', 
    component: () => import('../views/LandingView.vue')
  },
  { 
    path: '/summary',
    component: () => import('../views/SummaryView.vue') 
  },
  { 
    path: '/glossary',
    component: () => import('../views/GlossaryView.vue') 
  },
  { 
    path: '/fundamentals',
    component: () => import('../views/FundamentalsView.vue') 
  },
  { 
    path: '/crankyscorner',
    component: () => import('../views/CrankyView.vue') 
  },
  { 
    path: '/combos',
    component: () => import('../views/CombosView.vue') 
  },
  { 
    path: '/techs',
    component: () => import('../views/TechsView.vue') 
  },
  { 
    path: '/resources',
    component: () => import('../views/ResourcesView.vue') 
  },
  { 
    path: '/matchups',
    component: () => import('../views/MatchupsView.vue') 
  },
  { 
    path: '/matchups/:character',
    component: () => import('../views/MatchupsView.vue'),
    props: true
  },
  { 
    path: '/notes',
    component: () => import('../views/NotesView.vue')
  },
  { 
    path: '/notFound',
    component: () => import('../views/404View.vue')
  },
]

export default routes