import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // console.log(props.images);
    // const images = props.images.map(item=><img key={item.id} src={item.urls.regular} alt={item.description}/>
    // const images = props.images.map(({id,urls,description})=><img key={id} src={urls.regular} alt={description}/>
    const images = props.images.map(item =><ImageCard key={item.id} imageData={item} />
    );

    return(
        <div className="image-list">{images}</div>
    );
}

export default ImageList;