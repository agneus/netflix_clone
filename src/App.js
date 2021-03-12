import logo from './logo.svg';
import './App.css';
import Row from "./Row";
import requests from './request';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
       <Row title="Originals" fetchUrl={requests.fetchTrending} isLargeRow/>
       <Row title= "Now" fetchUrl={requests.fetchTopRated}/>
       <Row title="Whatever" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title= "Nanika" fetchUrl={requests.fetchTopRated}/>
       <Row title="Nothing" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title= "Something" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
