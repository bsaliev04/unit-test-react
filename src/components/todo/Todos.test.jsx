import {render, screen, fireEvent} from '@testing-library/react'
import Todos from './Todos';
import Counter from './../counter/Counter';

test("this test checks if input exist", () => {
  render(<Todos/>);
  const element = screen.getByRole('textbox')
  expect(element).toBeInTheDocument()
});

test('this test checks if input is empty at the beginning',  () => {
  render(<Todos/>)
  const emptyBeginning = screen.getByRole('textbox')
  expect(emptyBeginning.value).toBe('')
})

test("check if the input is changing correctly", () => {
  render(<Todos />);
  const element = screen.getAllByRole("textbox");
  fireEvent.change(element[0], {
    target: {
      value: "Hello",
    },
  });
  expect(element[0].value).toBe("Hello");
});
