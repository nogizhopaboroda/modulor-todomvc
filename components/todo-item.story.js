import { storiesOf } from 'modulor-storybook';

import './todo-item';

storiesOf('Todo item')
  .add(`ok`, () => {
    return `
      <b>hi</b>
      <todo-controller></todo-controller>
    `
  })
