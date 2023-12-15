import React from 'react';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <AppRoutes location={window.location.pathname} />
  );
}

export default App;