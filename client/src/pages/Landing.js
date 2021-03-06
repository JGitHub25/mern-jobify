import main from "../assets/images/main.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus
            repudiandae, ullam itaque, quisquam consectetur illo corporis
            maiores nihil modi debitis similique? Sunt dolores unde, ex earum
            tempora recusandae nobis maiores reprehenderit, necessitatibus illum
            nam culpa rerum iusto in ipsa quas voluptatibus distinctio animi!
            Ipsam provident at quia velit ducimus!
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img className="img main-img" src={main} alt="job hunt" />
      </div>
    </Wrapper>
  );
};
