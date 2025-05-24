import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a custom theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize the primary color
    },
    secondary: {
      main: "#ff4081", // Customize the secondary color
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}> {/* Wrap your app with the Provider */}
    <ThemeProvider theme={theme}> {/* Optional: Wrap with ThemeProvider */}
      <App />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
