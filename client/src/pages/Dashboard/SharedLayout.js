import { Link, Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

export const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">Add job</Link>
        <Link to="jobs">All Jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
