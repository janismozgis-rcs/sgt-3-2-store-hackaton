import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Views/Home';
import Categories from './Views/Categories';
import Category from './Views/Category';
import Product from './Views/Product';
import Cart from './Views/Cart';
import Page404 from './Views/Page404';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/categories">
                        <Categories />
                    </Route>
                    <Route path="/categories/:categoryId">
                        <Category />
                    </Route>
                    <Route path="/products/:categoryId/:productId">
                        <Product />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
