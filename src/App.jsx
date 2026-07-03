import './App.css';
import Navigation  from './components/Navigation.jsx'
import HeroSection  from './components/Hero.jsx';

// Component Always Starts With Capital Letter
const App = () =>
{

    return (
    <div>
        <Navigation/>
        <HeroSection/>
    </div>
    
    );
};

export default App;

