// import Router from "react-router";

import { MemoryRouter, Router } from "react-router-dom";
Router.useParams = jest.fn();
// import DogDetails from "./DogDetails";
// import DogList from "./DogList";
import RoutesList from "./RoutesList";

import { render, screen, waitFor } from "@testing-library/react";

// test("renders learn react link", () => {
//   Router.useParams.mockReturnValue({ name: "perry" });
//   render(<DogDetails />);
// });


test("check if dog list is rendered properly", function () {
  const { container, debug } = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <RoutesList />
    </MemoryRouter>
  );


  const allDogs = container.querySelectorAll(".Dog");
  expect(allDogs.length).toEqual(3);
});

test("check if dog details displays properly with a param", function () {
  Router.useParams.mockReturnValue({ name: "perry" });
  const {getByText, container, debug } = render(
      <MemoryRouter initialEntries={["/dogs/perry"]}>
        <RoutesList />
      </MemoryRouter>
  )

  debug(container);
  const dogFact = getByText(/Perry demolishes all snacks/i);
  expect(dogFact).toBeInTheDocument();
});

test("check if auto-redirect returns us to /dogs list", function () {
  const {container } = render(
    <MemoryRouter initialEntries={["/cats"]}>
    <RoutesList />
  </MemoryRouter>
  )

  const allDogs = container.querySelectorAll(".Dog");
  expect(allDogs.length).toEqual(3);
});

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useParams: () => ({ name: "burrito"}),
// }))