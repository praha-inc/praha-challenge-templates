import React from "react";
import "./Sanmoku.css";
import { Board } from "./Sanmoku";

export default {
  title: "Board",
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const NumbersBoard = Template.bind({});
NumbersBoard.args = {
  squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
};

export const TriangleBoard = Template.bind({});
TriangleBoard.args = {
  squares: ["△", "△", "△", "△", "△", "△", "△", "△", "△"],
};

export const NormalBoard = Template.bind({});
NormalBoard.args = {
  squares: ["O", "X", "O", "X", "O", "X", "O", "X", "O"],
};

export const CircleBoard = Template.bind({});
CircleBoard.args = {
  squares: ["O", "O", "O", "O", "O", "O", "O", "O", "O"],
};

export const CrossBoard = Template.bind({});
CrossBoard.args = {
  squares: ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
};

export const NullBoard = Template.bind({});
NullBoard.args = {
  squares: [null, null, null, null, null, null, null, null, null],
};

export const EmptyBoard = Template.bind({});
EmptyBoard.args = {
  squares: ["", "", "", "", "", "", "", "", ""],
};
