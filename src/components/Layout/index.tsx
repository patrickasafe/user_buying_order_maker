import ButtonAppBar from "../ButtonAppBar";
import { Page } from "../ButtonAppBar/utils/interfaces";


const Layout = ({ children, pages, settings }: { children: any; pages: Page[]; settings: Page[] }) => {
  return (
    <>
      <ButtonAppBar menuPages={pages} settings={settings} />
      {children}
    </>
  );
};
export default Layout