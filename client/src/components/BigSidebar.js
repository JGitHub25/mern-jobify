import Wrapper from "../assets/wrappers/BigSidebar";
import links from "../utils/links";

export const BigSidebar = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        const { id, text, icon, path } = link
        return <div key={id}>
          {text}{icon}
        </div>
      })}
    </Wrapper>
  );
};
