import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 20px auto 25px;
  gap: 16px;
  border: solid 1px;
  padding: 10px;
`;

export const FormLabel = styled.label`
  // display: flex;
  align-items: center;
  gap: 10px;
`;

export const LabelName = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
`;

export const FormBtn = styled.button`
  border: none;
  background: #0aa;
  color: #fff;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`;
