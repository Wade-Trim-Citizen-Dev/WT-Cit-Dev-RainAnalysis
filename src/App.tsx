import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { SettingsPanel } from './components/SettingsPanel';
import { DataIngestion } from './components/DataIngestion';
import { useStore } from './store';

// Lazy so recharts stays out of the initial bundle
const EventHyetograph = lazy(() =>
  import('./components/EventHyetograph').then(m => ({ default: m.EventHyetograph }))
);

function App() {
  const selectedEventId = useStore(s => s.selectedEventId);

  return (
    <>
      <Layout sidebarContent={
        <div className="space-y-5">
          <SettingsPanel />
          <DataIngestion />
        </div>
      }>
        <Dashboard />
      </Layout>

      {selectedEventId && (
        <Suspense fallback={null}>
          <EventHyetograph />
        </Suspense>
      )}
    </>
  );
}

export default App;
