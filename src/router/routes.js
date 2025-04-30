const routes = [
  { 
    path: '/', 
    component: () => import('../views/LandingView.vue'),
    props: true
  },
  { 
    path: '/dk-compendium', 
    component: () => import('../views/LandingView.vue'),
    props: true
  },
  { 
    path: '/summary',
    component: () => import('../views/SummaryView.vue') 
  },
  { 
    path: '/dk-compendium/summary',
    component: () => import('../views/SummaryView.vue') 
  },
  { 
    path: '/glossary',
    component: () => import('../views/GlossaryView.vue') 
  },
  { 
    path: '/dk-compendium/glossary',
    component: () => import('../views/GlossaryView.vue') 
  },
  { 
    path: '/dk-compendium/fundamentals',
    component: () => import('../views/FundamentalsView.vue') 
  },
  { 
    path: '/crankyscorner',
    component: () => import('../views/CrankyView.vue') 
  },
  { 
    path: '/dk-compendium/crankyscorner',
    component: () => import('../views/CrankyView.vue') 
  },
  { 
    path: '/combos',
    component: () => import('../views/CombosView.vue') 
  },
  { 
    path: '/dk-compendium/combos',
    component: () => import('../views/CombosView.vue') 
  },
  { 
    path: '/techs',
    component: () => import('../views/TechsView.vue') 
  },
  { 
    path: '/dk-compendium/techs',
    component: () => import('../views/TechsView.vue') 
  },
  { 
    path: '/resources',
    component: () => import('../views/ResourcesView.vue') 
  },
  { 
    path: '/dk-compendium/resources',
    component: () => import('../views/ResourcesView.vue') 
  },
  { 
    path: '/matchups',
    component: () => import('../views/MatchupsPreView.vue') 
  },
  { 
    path: '/dk-compendium/matchups',
    component: () => import('../views/MatchupsPreView.vue') 
  },
  { 
    path: '/matchups/:character',
    component: () => import('../views/MatchupsView.vue'),
    props: true
  },
  { 
    path: '/dk-compendium/matchups/:character',
    component: () => import('../views/MatchupsView.vue'),
    props: true
  },
  { 
    path: '/notes',
    component: () => import('../views/NotesView.vue')
  },
  { 
    path: '/dk-compendium/notes',
    component: () => import('../views/NotesView.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404View.vue')
  },
  
]

export default routes