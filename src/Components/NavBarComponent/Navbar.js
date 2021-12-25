import './Navbar.css';
import logo from '../Asserts/logo.svg';
import Container from '../CommonStyles/Container';

const Navbar = () => {

    const link = '#';
    return (
      <Container>
        <nav>
          <a href={link}>
            <img className="App-logo" src={logo} alt="logo" />
          </a>
        </nav>
      </Container>
    );
      
      
}

export default Navbar;