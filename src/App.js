import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Charts from "./components//Chart/Charts.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log(data);
  }
  render() {
    return (
      <div className={styles.container}>
        <h1></h1>
        <Cards data={this.state.data} />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default App;
