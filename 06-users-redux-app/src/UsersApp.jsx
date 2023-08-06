import { AppRoutes } from "./AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const UsersApp = () => {
  return (
    <Provider store={store}> {/* Esto permite compartir el store en nuestra app */}
      <AppRoutes />
    </Provider>
  )
};
