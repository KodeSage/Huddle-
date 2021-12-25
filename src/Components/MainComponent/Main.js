import './Main.css';
import Container from '../CommonStyles/Container';
import laphone from "../Asserts/illustration-mockups.svg";
const Main = () => {
    
    return (
      <Container>
        <div className="main-div">
          <div className="img-div">
            <img src={laphone} alt="laptop-phone" />
          </div>
          <div className="text-div">
            <h1>Build The Community Fans Your Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Register</button>
          </div>
        </div>
        <footer>
          <div className='Icon-class'>
            <div className="icon">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className="icon">
              <i class="fab fa-twitter"></i>
            </div>
            <div className="icon">
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </footer>
      </Container>
    );
}

export default Main;