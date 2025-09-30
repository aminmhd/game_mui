import logo from './logo.svg';
import './App.css';
import AppBarUp from './components/AppBar/AppBarUp';
import SideBar from './components/Sidebar/SideBar';
import Main from './components/main';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createTheme, ThemeProvider } from '@mui/material';
import { ParaglideProvider } from './context/paraglideContext';



function App() {

  const THEME = createTheme({
    // palette: {
    //   mode: "dark",
    // },
  });


  return (
    <ParaglideProvider>
      <Provider store={store}>
        <ThemeProvider theme={THEME}>
          <Main />
        </ThemeProvider>
      </Provider>
    </ParaglideProvider>
  );
}

export default App;
