import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import HeaderNav from "./components/HeaderNav";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  return (
    <div>
      <HeaderNav />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/products/:productName">
            <ProductsDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
