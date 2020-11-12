import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {spans:0};
        this.imageRef = React.createRef();
    }
    
    componentDidMount(){
        //console.log(this.imageRef);
        //console.log(this.imageRef.current);
        //console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',this.setSpans)
    }
    
    setSpans=()=>{
        // console.log(this.imageRef.current.clientHeight);
        const imgHeight= this.imageRef.current.clientHeight;
        const spans = Math.ceil(imgHeight/10);
        // this.setState({spans:spans});//same as below, ES2015 syntax
        this.setState({spans});
    };

    render(){
        const {description,urls} = this.props.imageData;
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;