import { Container } from 'react-bootstrap';

import { Home } from './components/home';
import { Footer } from './components/footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <h1 className="text-center font yellow margin">AniRate</h1>
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
