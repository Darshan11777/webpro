import React from 'react';

const  Admin= React.lazy(() => import('./src/App'));

const AdminPanel = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      < Admin/>
    </React.Suspense>
  );
};
export default AdminPanel;