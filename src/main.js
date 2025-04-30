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
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import DeferredContent from 'primevue/deferredcontent';
import Image from 'primevue/image';
import Card from 'primevue/card';



import "primeicons/primeicons.css";

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
    }
  },
  unstyled: false
})

app.use(router)

app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('Avatar', Avatar)
app.component('Badge', Badge )
app.component('Drawer', Drawer )
app.component('Card', Card )
app.component('Image', Image )
app.component('Button', Button )
app.component('DeferredContent', DeferredContent )
app.component('PanelMenu', PanelMenu )
app.component('Dialog', Dialog )
app.component('AutoComplete', AutoComplete )
app.component('Accordion', Accordion )
app.component('AccordionPanel', AccordionPanel )
app.component('AccordionHeader', AccordionHeader )
app.component('AccordionContent', AccordionContent )


app.directive('Tooltip', Tooltip);

//*USE A DRAWER FOR THE SIDEBAR WITH THE PANEL MENU TO MAKE IT LIKE DISCORD


app.mount('#app')