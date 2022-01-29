import React from "react";
import "./Sanmoku.css";

import { Square } from "./Sanmoku";

export default {
  title: "Square",
  component: Square,
};

const Template = (args) => <Square {...args} />;

export const LetterSquare = Template.bind({});
LetterSquare.args = {
  value: "a",
};

export const TriangleSquare = Template.bind({});
TriangleSquare.args = {
  value: "△",
};

export const CircleSquare = Template.bind({});
CircleSquare.args = {
  value: "O",
};

export const CrossSuquare = Template.bind({});
CrossSuquare.args = {
  value: "X",
};

export const NullSuquare = Template.bind({});
NullSuquare.args = {
  value: null,
};

export const EmptySuquare = Template.bind({});
EmptySuquare.args = {
  value: "",
};
