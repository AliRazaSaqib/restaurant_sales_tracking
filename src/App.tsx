import ErrorBoundary from "./components/errorBoundries/ErrorBoundries";
import AppRouters from "./components/routes/AppRouters";
import Providers from "./store/Provider";
import { store } from "./store/index";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Providers store={store}>
          <AppRouters />
        </Providers>
      </ErrorBoundary>
    </>
  );
}

export default App;
