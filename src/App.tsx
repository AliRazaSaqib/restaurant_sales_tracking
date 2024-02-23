import ErrorBoundary from "./components/errorBoundries/ErrorBoundries";
import AppRouters from "./components/routes/AppRouters";
import Providers from "./store/Provider";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Providers>
          <AppRouters />
        </Providers>
      </ErrorBoundary>
    </>
  );
}

export default App;
