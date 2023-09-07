import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const root = createRoot(document.getElementById('app'));
//console.log(root)

root.render(
  <StrictMode>
    <App name="StackBlitz" />
  </StrictMode>
);
