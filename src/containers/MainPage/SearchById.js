import React from 'react';
import styled from 'styled-components';

import Input from '../../components/Styled/Input';
import Select from '../../components/Styled/Select';
import GridVideo from '../../components/GridVideo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const FormContainer = styled.form`
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;

  input {
    margin-right: 3rem;
  }

  select {
    margin-right: 1rem;
  }
`;

const searchById = props => {
  return (
    <Container>
      <FormContainer>
        <Input type="text" placeHolder="Search by title" />
        <Select name="filterObject">
          <option value="object" defaultValue>
            Object
          </option>
          <option value="human">Human</option>
          <option value="vehicle">Vehicle</option>
        </Select>
        <Select name="filterObject">
          <option value="anomality" defaultValue>
            Anomality
          </option>
          <option value="human">Line Crosing</option>
          <option value="vehicle">Something</option>
        </Select>
      </FormContainer>
      <GridVideo />
    </Container>
  );
};

export default searchById;
