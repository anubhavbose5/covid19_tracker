import React from 'react';


import { Cards, Chart, CountryPicker} from "./components";
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(data);
    this.setState({data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country });
    

    // console.log(fetchedData);
    //fetch data
    //set the state
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

// function App() {

//   async componentDidMount
//   return (
//     <div className={styles.container}>
//       <Cards />
//       <Cards />
//       <CountryPicker />
//     </div>
//   );
// }

export default App;
