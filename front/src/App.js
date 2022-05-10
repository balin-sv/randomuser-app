import "./App.css";
import MainContainer from "./components/main-container/main-container";
import SearchBar from "./components/search-bar";
import Title from "./components/title";

function App() {
  return (
    <>
      <Title />
      <SearchBar />
      <MainContainer />
    </>
  );
}

export default App;
