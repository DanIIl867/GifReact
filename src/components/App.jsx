import { PureComponent } from "react";
import { GifSearch } from "./Gifs/GifSearch"
import { GiftList } from "./Gifs/GiftList"


export class App extends PureComponent{ 

  state = {
    query: '',
    gifs: null,
    
  }

componentDidMount(){
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=DEHeA1lxQWBSJz6O1gcRaeDhavt966ea&limit=25&offset=0&rating=g&bundle=messaging_non_clips')
  .then(res => res.json())
  .then(gifs => this.setState({gifs: gifs.data}))
}

onNameChange = (name) => {
  this.setState({
    pokemonName:name
  })
}

  render(){
    return (
      <div>
        <GifSearch onNameChange={this.onNameChange}/>
        <GiftList pokemonName={this.state.query} gifs={this.state.gifs}/>
      </div>
    );
  }
};
