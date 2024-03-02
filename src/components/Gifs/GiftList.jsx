import { PureComponent } from "react";

export class GiftList extends PureComponent{

    state={
        pokemon:'',
        error: null,
        status: 'resolved',
    }

    // componentDidUpdate =(prevProps)=>{
    //     if(prevProps.pokemonName !== this.props.pokemonName) {
    //         this.setState({status: 'pending', pokemon: null})

    //             fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    //             .then(res => {
    //                 if (!res.ok) {
    //                     return  Promise.reject(new Error(`Покемона з іменем ${this.props.pokemonName}
    //                      не знайдено!`))
    //                 }
    //                 return res.json()
                    
    //             })
    //             .then(pokemon => this.setState({pokemon, status: 'resolved'}))
    //             .catch(error=>this.setState({error, status: 'rejected'}))
    //     }
    // }

    render(){

        const { gif, error, status} = this.state 
        const {gifs} = this.props

            if (status === 'idle') {return <p>Про що Gif?</p>}
            if (status === 'pending') {return <div>Loading...</div>}
            if (status === 'rejected') {return <div>{error.message}</div>}
            if (status === 'resolved') {
                return <ul>
                    {!gifs && gifs.map(gif => {
                        return <li key={gif.id}>
                            <img src={gif.images.original.url} alt="" />
                        </li> 
                    })}
                </ul>}
            }
}