import React, { Component } from 'react';
import './App.css';
import NavBar from './global/components/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './global/theme';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieID: 157336 // set initital load movie - Interstellar
    }
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar></NavBar>
          <p>Top rated movies</p>
        </div>
      </MuiThemeProvider>
    );
  }

  // the api request function
  fetchApi(url) {
    
    fetch(url).then((res) => res.json()).then((data) => {
      // update state with API data
      this.setState({
        movieID: data.id,
        original_title: data.original_title,
        tagline: data.tagline,
        overview: data.overview,
        homepage: data.homepage,
        poster: data.poster_path,
        production: data.production_companies,
        production_countries: data.production_countries,
        genre: data.genres,
        release: data.release_date,
        vote: data.vote_average,
        runtime: data.runtime,
        revenue: data.revenue,
        backdrop: data.backdrop_path

      })
    })

    // .catch((err) => console.log('Movie not found!'))

  } // end function

  componentDidMount() {
    debugger
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=ffc6639ca269adec1a663ec303bf1a1a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    this.fetchApi(url)

  }
}

export default App;
