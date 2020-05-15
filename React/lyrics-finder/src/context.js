import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 Tracks ',
  };

  componentDidMount = () => {
    // https://cors-anywhere.herokuapp.com/ is kinda proxy to stick afront of an URL to  avoid cors errors
    axios
      .get(
        ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((response) => {
        this.setState({ track_list: response.data.message.body.track_list });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
