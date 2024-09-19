import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css'; // Import the default styles
import './assets/main.css';

const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use Vue Router for routing
app.use(router);

// Use Vue Toastification for toast notifications
app.use(Toast, {
  position: POSITION.TOP_CENTER,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
});

// Mount the app to the DOM
app.mount('#app');
