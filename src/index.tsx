import {createRoot} from 'react-dom/client';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {Suspense} from 'react';
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Suspense fallback="">
         <ThemeProvider>
            <App />
         </ThemeProvider>
      </Suspense>
   </BrowserRouter>,
);
