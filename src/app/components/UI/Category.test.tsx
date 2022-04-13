import React from "react";
import "jest";
import { prettyDOM, render } from "@testing-library/react";

import Category from "./Category";

test("renders without crashing", () => {
  const category = "Moda";
  const image = "https://anyurl.com";

  const component = render(<Category category={category} image={image} />);

  const img = component.container.querySelector("img");

  console.log(img?.src);

  // expect(img).toHaveProperty("src", image);
});
