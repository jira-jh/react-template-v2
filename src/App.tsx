import Router from './routes/route';
// Css
import './App.css'
import { ThemeProvider, createTheme as createMuiTheme } from '@mui/material/styles';

import { createPalette } from './themes/palette-themes';
import { createComponents } from './themes/components-themes';
import { createShadows } from './themes/shadows-themes';

import { Toaster } from "sonner";
const palette = createPalette();
const components = createComponents({ palette });
const shadows = createShadows();
function App() {

  const theme = createMuiTheme({
    components,
    palette,
    shadows,
    shape: {
      borderRadius: 8
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Toaster position="top-right" richColors closeButton />
        <Router />
      </div >
    </ThemeProvider>
  )
}

export default App
