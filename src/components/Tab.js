// src/components/Tab.js
import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const Tab = () => {
  const { tabId } = useParams();
  const TabComponent = lazy(() => import(`../tabs/${tabId}`));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TabComponent />
      </Suspense>
    </div>
  );
};

export default Tab;
