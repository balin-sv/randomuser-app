import { useEffect, useState } from "react";
import ApiService from "./services/api-service";
import "./App.css";
import MainContainer from "./components/main-container";
import SearchBar from "./components/search-bar";
import Title from "./components/title";
import Spinner from "./components/spinner";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const apiService = new ApiService();
    let mounted = true;
    (async () => {
      try {
        const res = await apiService.getResourse("/?results=15");
        if (mounted) {
          const data = ExtractData(res.results);
          setData((prev) => data);
          setIsLoaded(true);
        }
      } catch (error) {
        setIsLoaded(true);
        console.log(error);
      }
    })();
    return () => (mounted = false);
  }, []);

  const ExtractData = (data) => {
    let dummyId = 100;
    return data.map((item) => {
      return {
        id: `${item.id.value ? item.id.value : dummyId++}`,
        name: `${item.name.first}${" "}${item.name.last}`,
        age: item.dob.age,
        country: item.location.country,
        phone: item.cell,
        img: item.picture.large,
      };
    });
  };

  const deliteCard = (id) => {
    const newData = data.filter((item) => item.id !== id);
    const newFilteredData = filteredData.filter((item) => item.id !== id);
    setFilteredData(newFilteredData);
    setData(newData);
  };

  const searchCard = (str) => {
    const res = data.filter((item) =>
      item.name.toLowerCase().includes(str.toLowerCase())
    );
    setFilteredData(res);
    setIsFiltered(true);
  };

  return (
    <>
      <Title />
      <SearchBar searchCard={searchCard} />
      {!isLoaded && <Spinner />}
      {isFiltered ? (
        <MainContainer
          data={filteredData}
          deliteCard={deliteCard}
          isFiltered={isFiltered}
          toogle={() => {
            setIsFiltered(false);
            setFilteredData([]);
          }}
        />
      ) : (
        <MainContainer data={data} deliteCard={deliteCard} />
      )}
    </>
  );
}
export default App;
