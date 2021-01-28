import styled from 'styled-components';

const Btn = styled.button`
  padding: 5px 5px;
  margin: 5 auto 15px auto;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  transition: 0.3s;
  max-width: 300px;
  width: 100%;
`;

export default Btn;
