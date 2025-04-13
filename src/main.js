import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/router';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import PanelMenu from 'primevue/panelmenu';

import "primeicons/primeicons.css";

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
  }
  }
})

app.use(router)

app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('Avatar', Avatar)
app.component('Badge', Badge )
app.component('Drawer', Drawer )
app.component('Button', Button )
app.component('PanelMenu', PanelMenu )

//*USE A DRAWER FOR THE SIDEBAR WITH THE PANEL MENU TO MAKE IT LIKE DISCORD


app.mount('#app')
