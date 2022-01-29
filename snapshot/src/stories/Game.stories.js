import React from "react";
import "./Sanmoku.css";
import { Game } from "./Sanmoku";
// import * as BoardStories from "./Board.stories";

export default {
  title: "Game",
  component: Game,
};
const Template = (args) => <Game {...args} />;

export const Zero_full_triangle = Template.bind({});
Zero_full_triangle.args = {
  history: [
    {
      squares: ["△", "△", "△", "△", "△", "△", "△", "△", "△"],
    },
  ],
  stepNumber: 0,
  xIsNext: false,
};

export const One_all_circle_all_cross = Template.bind({});
One_all_circle_all_cross.args = {
  history: [
    {
      squares: ["O", "O", "O", "O", "O", "O", "O", "O", "O"],
    },
    {
      squares: ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
    },
  ],
  stepNumber: 1,
  xIsNext: true,
};

export const One_all_null_one_cross_true = Template.bind({});
One_all_null_one_cross_true.args = {
  history: [
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
  ],
  stepNumber: 0,
  xIsNext: true,
};

export const One_all_null_one_cross_false = Template.bind({});
One_all_null_one_cross_false.args = {
  history: [
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
  ],
  stepNumber: 0,
  xIsNext: false,
};

export const One = Template.bind({});
One.args = {
  history: [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
  ],
  stepNumber: 0,
  xIsNext: true,
};
export const Two = Template.bind({});
Two.args = {
  history: [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
  ],
  stepNumber: 1,
  xIsNext: true,
};
export const Three = Template.bind({});
Three.args = {
  history: [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, null, null, null, null, null],
    },
  ],
  stepNumber: 2,
  xIsNext: true,
};
export const Four = Template.bind({});
Four.args = {
  history: [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, null, null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, "X", null, null, null, null],
    },
  ],
  stepNumber: 3,
  xIsNext: true,
};
export const Five = Template.bind({});
Five.args = {
  history: [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, null, null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, "X", null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, "X", null, "O", null, null],
    },
  ],
  stepNumber: 4,
  xIsNext: true,
};
export const Five_another = Template.bind({});
Five_another.args = {
  history: [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, null, null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, "X", null, null, null, null],
    },
    {
      squares: ["X", null, "O", null, "X", null, null, null, "X"],
    },
  ],
  stepNumber: 4,
  xIsNext: false,
};

// export const OneItem = Template.bind({});
// OneItem.args = {
//   children: <BoardStories {...BoardStories.args} />,
// };
