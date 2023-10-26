import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './components/Main'
import './App.css';


const theme = createTheme({
  palette: {
    primary: {
      main:"#ffffff",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'JetBrains Mono',
      'monospace'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
