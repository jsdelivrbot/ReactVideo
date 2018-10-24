import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';
import VideoDetail from '../components/video-detail';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=03ae646b7b054fc7c416fdc00803f967";

class App extends Component{
    constructor(props){
        super(props)
        this.state ={movieList:{},currentMovie:{}};
    }
    componentWillMount(){
     this.initMovies();
    }
    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
            this.setState({movieList:response.data.results.slice(0,6),currentMovie:response.data.results[0]});
            console.log("",this.state.movieList);
        }.bind(this));
    }
    render(){
        return (
            <div>
                <SearchBar/>
                <VideoList/>
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
            </div>
            )
    }
  
}

export default App;