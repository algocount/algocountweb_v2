import styled from "styled-components";

const Role = styled.h1`
  text-transform: uppercase;
  font-size: 0.875em;
  letter-spacing: 1.25px;
  font-weight: 400;
`;

const Uni = styled.h2`
  font-size: 2.875em;
  letter-spacing: -1.8px;
  font-weight: 600;
  margin-bottom: 0.15em;

  @media only screen and (max-width: 500px) {
    font-size: 2em;
    letter-spacing: -1.2px;
  }

`;

const Department = styled.h3`
  font-size: 0.875em;
  letter-spacing: 0.1px;
  font-weight: 500;
`;

const SRow = styled.div`
  font-family: "Inter", sans-serif;
  text-align: center;
  padding-bottom: 1em;
  margin-top: 6em;
`;

export const PeopleHeader = (props) => {
  return (
    <SRow>
      <Role>{props.role}</Role>
      <Uni>{props.uni}</Uni>
      <Department>{props.dep}<i>{props.italic}</i></Department>
    </SRow>
  );
};

export default PeopleHeader
