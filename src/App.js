import React, { Component } from 'react';
import './App.css';
import NavBar from './global/components/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './global/theme';
import MovieCard from './global/components/MovieCard';
import CustomCard from './global/components/CustomCardMovie/CustomCard';
import {  Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieID: 157336, // set initital load movie - Interstellar
      topRated: [],
    }
  }

  render() {

    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    }

    let movies = this.state.topRated.filter(function (movie) {
      return movie.poster_path != null;
    }).map(function (movie) {
      debugger
      return (
        <Col xs={6} sm={4} md={3} key={movie.id} >
          <CustomCard></CustomCard>
          
        </Col>
      );
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar></NavBar>
          <p>Top Rated Movies</p>
          <Container fluid={false}>
            <Row style={style}>
              {movies}
            </Row>
          </Container>

        </div>
      </MuiThemeProvider>
    );
  }

  // the api request function
  fetchApi(url) {

    fetch(url).then((res) => res.json()).then((data) => {
      let resultData = data.results;
      debugger
      // update state with API data
      this.setState({
        topRated: data.results
      })
      /*this.setState({
        movieID: resultData.id,
        original_title: resultData.original_title,
        tagline: resultData.tagline,
        overview: resultData.overview,
        homepage: resultData.homepage,
        poster: resultData.poster_path,
        production: resultData.production_companies,
        production_countries: resultData.production_countries,
        genre: resultData.genres,
        release: resultData.release_date,
        vote: resultData.vote_average,
        runtime: resultData.runtime,
        revenue: resultData.revenue,
        backdrop: resultData.backdrop_path

      })*/
    })

    // .catch((err) => console.log('Movie not found!'))

  } // end function

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=ffc6639ca269adec1a663ec303bf1a1a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    this.fetchApi(url)

  }
}

export default App;
