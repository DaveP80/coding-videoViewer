import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }; 

  componentDidMount() {
    this.onTermSubmit(
      'python tutorial'
    );
  }

  onTermSubmit = (term) => {
    function YouTubeGetID(url){
      url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
   }
   const setarrobj = async(term) => {
    var youtube = await fetch(`https://fastapi-youtube.uk.r.appspot.com/${term}`, { mode: 'cors'});
     youtube.json().then(e => {
      let stage = []
      e['urls'].forEach(item => {
      let obj = {}
      obj.id = YouTubeGetID(item[0])
      obj.title = item[1]
      stage.push(obj)
      })
      this.setState({
      videos: stage.splice(0,5),
      selectedVideo: stage.splice(0,stage.length)[0],
    })})}

    setarrobj(term)

  
      }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
      
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;