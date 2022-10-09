import { Route, HashRouter} from "react-router-dom";
import Api from "./Api";
import RegisterForm from "./components/Auth/RegisterForm";
import AuthForm from "./components/Auth/AuthForm";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import VerbalTestOne from "./components/AptitudeTests/VerbalTestOne";
import VerbalTestTwo from "./components/AptitudeTests/VerbalTestTwo";
import VerbalTestThree from "./components/AptitudeTests/VerbalTestThree";
import QuantitativeTestOne from "./components/AptitudeTests/QuantitativeTestOne";
import QuantitativeTestTwo from "./components/AptitudeTests/QuantitativeTestTwo";
import QuantitativeTestThree from "./components/AptitudeTests/QuantitativeTestThree";
/** Navbar link: https://blog.logrocket.com/create-responsive-navbar-react-css/ */
import Layout from "./components/UI/Layout";
///https://www.django-rest-framework.org/tutorial/1-serialization/

function App() {
  return (
    <HashRouter>
    <Layout>
        <Route path='/' component={HomePage} exact/>
        <Route path="/auth" component={AuthForm} />
        <Route path='/my-app' component={Api} />  
        <Route path='/register' component={RegisterForm} />
        <Route path='/verbalTestOne' component={VerbalTestOne} />
        <Route path='/verbalTestTwo' component={VerbalTestTwo} />
        <Route path='/verbalTestThree' component={VerbalTestThree} />
        <Route path='/quantitativeTestOne' component={QuantitativeTestOne} />
        <Route path='/quantitativeTestTwo' component={QuantitativeTestTwo} />
        <Route path='/quantitativeTestThree' component={QuantitativeTestThree} />
        <Route path='/contact' component={ContactPage} />
    </Layout>
    </HashRouter>
  );
}

export default App;