import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles';
import Footer from './Components/Footer';

import Rotas from './routes'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Rotas/>
        <Footer></Footer>
      </div>    
    </BrowserRouter>
  );
}

export default App;
