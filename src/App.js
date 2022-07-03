import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: 'fff',
    footer: '#003333',
  },
}

function App() {
  return (
    <ThemeProvider theme = { theme }>
     <>  
      <GlobalStyles />
      {/* Using a fragment to return everything */}
      <Header />
    {/* // <div className="container"> //Instead of this we used styled component container */}
      <Container>
        <h1>Hello World</h1>
      </Container> 
    </>
    </ThemeProvider>
  );
}

export default App;
