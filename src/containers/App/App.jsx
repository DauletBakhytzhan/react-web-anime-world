// import cn from "classnames";
import styles from "./App.module.css";
// import { getApiResource } from '../../utils/network';
import routerConfig from "../../routes/routesConfig";
import Header from "../../components/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <Switch>
            {routerConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              ></Route>
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
