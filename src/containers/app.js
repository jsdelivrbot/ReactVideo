import React from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';

const App = () =>{
    return (
    <div>
        <SearchBar/>
        <VideoList/>
    </div>
    )
}

export default App;