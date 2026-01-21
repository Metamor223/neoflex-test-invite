import "./App.css";
import AppRouter from "./components/functions/AppRouter";
import Footer from "./components/UI/footer/footer";
import Header from "./components/UI/header/header";

function App() {
  return (
    <div className="App">
      <div className="app-container">
          <Header/>
          <AppRouter/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
