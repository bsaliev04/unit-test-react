import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test('this test cheks if counter exist', () => {
    render (<Counter/>)
    const element = screen.getByText(/Counter/i)
    expect(element).toBeInTheDocument()
})

test('this test checks if the component is rendering well' , () => {
    render (<Counter/>)
    const element = screen.queryByText(/search/i)
    expect(element).not.toBeInTheDocument()
})

test('this test checks if the button exist',  () => {
    render(<Counter/>)
    const element = screen.getAllByRole('button')
    expect(element[0]).toBeInTheDocument()
})

test('this test cheks if the button add one works', () => {
    render(<Counter/>)
    const addOneButton = screen.getAllByRole('button');
    const myCounter = screen.getByTestId('my-counter')
    fireEvent.click(addOneButton[0])
    fireEvent.click(addOneButton[0]);
    fireEvent.click(addOneButton[0]);
    expect(myCounter.innerHTML).toBe("3")
})


test("this tests checks if the buttons work well together", () => {
  render(<Counter />);
  const buttons = screen.getAllByRole("button");
  const counter = screen.getByTestId("my-counter");
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[0]);
  expect(counter.innerHTML).toBe("2");
  fireEvent.click(buttons[1]);
  expect(counter.innerHTML).toBe("1");
});

