import styled from '@emotion/styled';
import LoginFormContainer from './LoginFormContainer';

const Container = styled.div({
  fontFamily: '\'Dancing Script\', cursive',
  h2: {
    fontSize: '40px',
    margin: '20px 0 15px 0',
    textAlign: 'center',
  },
});

export default function LoginPage() {
  return (
    <Container>
      <h2>Log In</h2>
      <LoginFormContainer />
    </Container>
  );
}
