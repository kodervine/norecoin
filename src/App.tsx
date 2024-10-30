import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from 'react';
import ErrorFallback from '@/pages/Errors/ErrorFallback';
import AppLayout from '@/layouts/AppLayout';
import DashboardPage from '@/pages/Dashboard';
import NotFound from '@/pages/Errors/NotFound';

const App = () => {
  const [resetKey, setResetKey] = useState('');

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      onReset={() => setResetKey('')}
      resetKeys={[resetKey]}
    >
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<DashboardPage />} path="/dashboard" />
            <Route element={<Navigate to="/dashboard" />} path="/" />
          </Route>
          <Route element={<NotFound />} path="/*" />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
