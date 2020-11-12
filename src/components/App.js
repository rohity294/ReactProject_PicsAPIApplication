import React from 'react';
// import Axios from 'axios';
import Unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// const App = ()=>{
//     return(
//         <div className="ui container" style={{marginTop: '10px'}}>
//             <SearchBar/>
//         </div>
//     );
// };

class App extends React.Component{

    state = { images:[] };

    // onSearchSubmit(term){
    //     // console.log(term);
    //     Axios.get('https://api.unsplash.com/search/photos',{
    //           params: {query:term},
    //           headers:{
    //             Authorization: 'Client-ID fod7fcRfmrqZLRrRqxDwMBnAZhndyaVn4WgNaIktZFQ'
    //           }  
    //     }).then((response)=>{
    //         console.log(response.data.results);
    //     });
    // };//Asios returns a promise which is then used in the
    
    //this.props.onMySubmit(this.state.term);//calling statement from line 10 SearchBar.js; the value of 'this' inside below function would be 'props'
    //async onSearchSubmit(term){ //old code without proper 'this' binding, hence needing below arrow function implementaion
    // onSearchSubmit = async (term)=>{
    //     // console.log(term); // onMySubmit: ƒ
    //     const response = await Axios.get('https://api.unsplash.com/search/photos',{
    //           params: {query:term},
    //           headers:{
    //             Authorization: 'Client-ID fod7fcRfmrqZLRrRqxDwMBnAZhndyaVn4WgNaIktZFQ'
    //           }  
    //     });
    //     // console.log(this);//onMySubmit: ƒ
    //     this.setState({images: response.data.results});
    // }; //without using api 

    onSearchSubmit = async (term)=>{
        
        const response = await Unsplash.get('search/photos',{
              params: {query:term}     
        });
        
        this.setState({images: response.data.results});
    };
    
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onMySubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
            </div>
        );
    };
      
} 
    
export default App;