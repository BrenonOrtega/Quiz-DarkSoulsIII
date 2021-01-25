import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 12px;
  margin-bottom : 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) =>{ 
      return theme.colors.mainBg
      }
    };

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    
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
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Input = styled.input`
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 7px;  
  background-color: ${({ theme }) => theme.colors.mainBg};  
  * {
    margin: 1;
  }
`;


export default Widget