import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount = () => {
    const getLyrics = async () => {
      const promise1 = axios.get(
        ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      );
      const promise2 = axios.get(
        ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      );

      await Promise.all([promise1, promise2])
        .then((result) => {
          this.setState({
            lyrics: result[0].data.message.body.lyrics.lyrics_body,
          });
          this.setState({ track: result[1].data.message.body.track });
          console.log(result);
          // console.log(result[0].data.message.body.lyrics);
          // console.log(result[1].data.message.body);
        })
        .catch((error) =>
          console.error(`Something went wrong Error: ${error}`)
        );
    };
    getLyrics();
  };

  render() {
    return <h1>Hello</h1>;
    // const { lyrics, tracks } = this.state;
    // if (
    //   track === undefined ||
    //   lyrics === undefined ||
    //   Object.keys(track).length === 0 ||
    //   Object.keys(lyrics).length === 0
    // ) {
    //   return <Spinner />;
    // } else {
    //   <h1>Data returned</h1>;
    // }
  }
}
export default Lyrics;
