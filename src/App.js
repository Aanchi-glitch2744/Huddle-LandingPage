import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import content from './content'

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
         {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </Container> 
      <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
