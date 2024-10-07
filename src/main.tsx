 import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/themes.ts';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</Provider>
)
