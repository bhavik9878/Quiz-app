import styled from "styled-components";

export const ButtonComp = styled.button`
background: white;
color: ${(props) => (!props.primary ? "grey" : " #0d6efd")};
font-size: 1em;
width: ${(props) => (props.fullWidth ? "100%" : "auto")};
margin: 1em;
padding: 0.5em 1.5em;
border: 2px solid #0d6efd;
border: ${(props) =>
  props.primary ? "2px solid #0d6efd" : "2px solid grey"};
border-radius: 3px;
cursor: pointer;
margin:0;

&:hover {
  background: ${(props) => (props.primary ? " #0d6efd" : "grey")};
  color: ${(props) => (props.primary ? "white" : "white")};
}
`;