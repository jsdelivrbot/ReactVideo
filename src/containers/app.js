import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import Video from '../components/video';
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
            this.setState({movieList:response.data.results.slice(0,6),currentMovie:response.data.results[0]},function(){
                this.applyVideoToCurrentMovie();
            });
      
        }.bind(this));
    }
    applyVideoToCurrentMovie(){
     
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
          const youtubeKey = response.data.videos.results[0].key;
          let newCurrentMovieState = this.state.currentMovie;
          newCurrentMovieState.videoId= youtubeKey;
          this.setState({currentMovie : newCurrentMovieState});
        }.bind(this));
    }
      
    
    render(){
        const renderVideoList = () =>{
            if(this.state.movieList.length>=5){
                return  <VideoList movieList={this.state.movieList}/>
            }
        }
        return (
            <div>
                <SearchBar/>
                <Video videoId={this.state.currentMovie.videoId}/>
               {renderVideoList()}
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
            </div>
            )
    }
  
}

export default App;