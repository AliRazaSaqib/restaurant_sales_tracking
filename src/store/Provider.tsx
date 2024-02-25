import { Provider } from "react-redux";
import { ReactNode } from "react";
import { Store } from "redux";

function Providers({ children, store }: { children: ReactNode; store: Store }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
