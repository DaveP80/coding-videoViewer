import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';

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
    let regex = /javascript|python|java|react|c\+\+|typescript/gm
    if (!term.match(regex)) {
      let res = term.substring(0,term.length/2)
      alert (`invalid query! ${res}`)
      return;
    }
    var youtube = await fetch(`https://fastapi-youtube.uk.r.appspot.com/${term}`, { mode: 'cors'});
     youtube.json().then(e => {
      let stage = []
      if (e['urls']!=='no matching results'){
      e['urls'].forEach(item => {
      stage.push({id: YouTubeGetID(item[0]), title: item[1]})
      })}
      else{
      alert `no video results!`
      return}
      this.setState({
      videos: stage,
      selectedVideo: stage.length<5 ? stage[0] : stage.shift(),
    })})}

    setarrobj(term.toLowerCase().trim().replaceAll("  ", ' '))
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