import GlobalStyle from './styles';
import Header from './Components/Header';
import RestList from './Containers/RestaurantList';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <RestList></RestList>
      <Footer></Footer>
    </div>
  );
}

export default App;
