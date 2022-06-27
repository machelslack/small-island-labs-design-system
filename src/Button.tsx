import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default () => (
  <>
    <span>{"This is a span element"}</span>
    <Button onClick={() => alert("button clicked")}>
      {"This is a button to click"}
    </Button>
  </>
);
