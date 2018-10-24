import React from 'react';
import VideoListItem from '../components/video-list-item';


const VideoList = ({movieList})=> {
  
    return (
        <div>
            {
                movieList.map(movie => {
                    return <VideoListItem key={movie.id} movie={movie}/>
                })
            }
            <ul>
               
              
            </ul>
        </div>
  
    )

}
export default VideoList;