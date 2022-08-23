import ButtonAppBar from "../ButtonAppBar";
import { Page } from "../ButtonAppBar/utils/interfaces";


const Layout = ({ children, pages }: { children: any; pages: Page[]}) => {
  return (
    <>
      <ButtonAppBar menuPages={pages} />
      {children}
    </>
  );
};
export default Layout