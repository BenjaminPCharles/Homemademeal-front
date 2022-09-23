import styled from 'styled-components';

// import Home from './views/Home/Home';
// import Signup from './views/Signup/Signup';
// import Signin from './views/Signin/Signin';
import Profile from './views/Profile/Profile';

const Warpper = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

function App() {
  return (
    <Warpper>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Signin /> */}
      <Profile />
    </Warpper>
  )
};

export default App;
