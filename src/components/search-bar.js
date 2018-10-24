import React ,{Component} from 'react'

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {searchText :"",placeHolder:"Taper votre film..."}
    }
    render(){
        return (
        <div>
                <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
              
        </div>
        )
    }
    // Recupére la valeur de l'input et la place dans le state searchText
    handleChange(event){
        // utiliser bind pour faire refence au this
      this.setState({searchText:event.target.value});
    }
   
}

export default SearchBar;