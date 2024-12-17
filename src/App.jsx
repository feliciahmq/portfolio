import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className=" mx-auto max-w-6xl flex-col align-center justify-center p-5 xl:px-0 scroll-smooth sans-serif">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
