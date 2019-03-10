import React, { Component } from 'react';
import './App.css';
import NavBar from './global/components/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './global/theme';
import CustomCard from './global/components/CustomCardMovie/CustomCard';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topRated: [],
    }
  }

  render() {

    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    }

    const topRatedMovies = {
      height: '38px',
      width: '264px',
      color: '#FFF',
      fontSize: '32px',
      lineHeight: '38px',
      marginLeft: '6px',
    }

    let movies = this.state.topRated.filter(function (movie) {
      return movie.poster_path != null;
    }).map(function (movie) {
      return (
        <Col xs={6} sm={4} md={3} key={movie.id} >
          <CustomCard data={movie}></CustomCard>
        </Col>
      );
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar></NavBar>
          <div>
            <p style={topRatedMovies}>Top Rated Movies</p>
            <Container fluid={false}>
              <Row style={style}>
                {movies}
              </Row>
            </Container>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  fetchApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      this.setState({
        topRated: data.results
      })
    })
  }

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=ffc6639ca269adec1a663ec303bf1a1a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    this.fetchApi(url)
  }
}

export default App;
