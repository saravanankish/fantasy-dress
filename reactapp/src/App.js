import './App.css';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Login from './login/Login';
import SignUp from './signup/Signup';
import Home from './home/Home';
import Admin from './admin/Admin';
import OrderList from './admin/orderlist/OrderList';
import About from './home/pages/about';
import PageNotFound from './PageNotFound/PageNotFound';
import CartScreen from './cart/cartScreen';
import OrderScreen from './user-order/orderScreen';
import ProductScreen from './home/pages/ProductScreen';
import HomeAdmin from './admin/dashboard/Home';
import AddProduct from './admin/addproduct/AddProduct';
import EditProduct from './admin/product-edit/EditProduct';

function App() {
  return (
      <Router>
        <Routes/>
      </Router>
  );
}

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" render={() => {
        if(localStorage.getItem("user") != null && localStorage.getItem("user") === "true"){
          return <Redirect to="/home" />;
        }else if(localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"){
          return <Redirect to="/admin" />;
        }else{
          return <Redirect to="/login" />;
        }
      }} />
      <ProtectedLoginRoute exact auth={(localStorage.getItem("user") == null || localStorage.getItem("user") !== "true") && (localStorage.getItem("admin") == null || localStorage.getItem("admin") !== "true")} path="/login" component={Login} />
      <ProtectedLoginRoute exact path="/signup" auth={(localStorage.getItem("user") == null || localStorage.getItem("user") !== "true") && (localStorage.getItem("admin") == null || localStorage.getItem("admin") !== "true")} component={SignUp} />
      <ProtectedRoute exact auth={localStorage.getItem("user") != null && localStorage.getItem("user") === "true"} path="/home" component={Home} inner={About} />
      <ProtectedRoute exact auth={localStorage.getItem("user") != null && localStorage.getItem("user") === "true"} path="/product/:id" component={Home} inner={ProductScreen}/>
      <ProtectedRoute exact auth={localStorage.getItem("user") != null && localStorage.getItem("user") === "true"} path="/cart" component={Home} inner={CartScreen}/>
      <ProtectedRoute exact auth={localStorage.getItem("user") != null && localStorage.getItem("user") === "true"} path="/orders" component={Home} inner={OrderScreen}/>
      <ProtectedRoute exact auth={localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"} path="/admin" component={Admin} inner={HomeAdmin}/>
      <ProtectedRoute exact auth={localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"} path="/addProduct" component={Admin} inner={AddProduct}/>
      <ProtectedRoute exact auth={localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"} path="/editProduct" component={Admin} inner={EditProduct}/>
      <ProtectedRoute exact auth={localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"} path="/admin/orders" component={Admin} inner={OrderList}/>
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

const ProtectedLoginRoute = ({auth, component: Component, ...rest}) => {
  return(
    <Route {...rest} render={(props) => auth ? ( <Component {...props}/> ) : (<Redirect to="/" />)} />
  );
}

const ProtectedRoute = ({auth, component:Component, inner, ...rest}) => {
  return(
    <Route {...rest} render={(props) => auth ? ( <Component {...props} inner={inner} prop={props}/> ): (<Redirect to='/login' />) }/>
  );
}

export default App;
