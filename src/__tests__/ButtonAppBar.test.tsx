import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ButtonAppBar from "../components/ButtonAppBar";
import { Page } from "components/ButtonAppBar/utils/interfaces";

const menuPages: Page[] = [
  {
    page: "page0",
    link: "link0",
  },
  {
    page: "page1",
    link: "link1",
  },
  {
    page: "page2",
    link: "link2",
  },
];

userEvent.setup();


test("menu button options", () => {
  render(<ButtonAppBar menuPages={menuPages} />);
  const menuButton = screen.getByRole("button", { 'name': 'account of current user' });
  userEvent.click(menuButton);

  for (let menuPage of menuPages) {
    expect(screen.getByText(menuPage.page)).toBeTruthy();
  }
});
