import styled from 'styled-components';

const YouDied = styled.img`
  flex: 1;
  width: 100%;
  height: 120px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default YouDied;
