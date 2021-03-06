import styled from 'styled-components';

const Widget = styled.div`
  opacity: 1;
  margin-top: 12px;
  margin-bottom : 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.mainBg
};

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    text-align center;
    
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Content = styled.div`
  padding: 16px 24px 16px 24px;
  &>*:first-child{
    margin-top: 0;
  }
  &>*:last-child{
    margin-bottom: 0;
  }
  ul{
    list-style: none;
    padding: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 26px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.secondary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

Widget.Input = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.contrastText};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 7px;  
  text-align: center;

  background-color: ${({ theme }) => theme.colors.mainBg};  
  * {
    margin: 2;
  }::placeholder{
    color: ${({ theme }) => theme.colors.contrastText};
    opacity: 60%;
  }
`;

export default Widget;
