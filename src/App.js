import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import UserPage from "./pages/UserPage";
import faker from "faker";
import ProductDetail from "./pages/ProductDetail";
import AuthProvider from "./components/AuthProvider";

const theme = createTheme({});

const product_list = Array(10)
  .fill(null)
  .map((_, i) => ({
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.random.words(10)
  }));

export const productsContext = createContext([]);
export const userContext = createContext("Daniel");
export const filterContext = createContext("");

function App() {
  const [products, setProducts] = useState(product_list);
  const filterState = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <productsContext.Provider value={[products, setProducts]}>
        <userContext.Provider value={"Daniel"}>
          <filterContext.Provider value={filterState}>
            <AuthProvider>
              <Router>
                <Navbar />
                <Container>
                  <Switch>
                    <Route path="/products" exact={true}>
                      <ProductListPage />
                    </Route>
                    <Route
                      path="/products/:idproducto"
                      component={ProductDetail}
                    />
                    <Route path="/user" component={UserPage} />
                  </Switch>
                </Container>
              </Router>
            </AuthProvider>
          </filterContext.Provider>
        </userContext.Provider>
      </productsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
