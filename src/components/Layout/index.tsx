import ButtonAppBar from "../ButtonAppBar";
import { Page } from "./utils/interfaces";


export const Layout = ({ children, pages }: { children: any; pages: Page[]}) => {
  return (
    <>
      <ButtonAppBar menuPages={pages} />
      {children}
    </>
  );
};
