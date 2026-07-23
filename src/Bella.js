import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import "react-image-gallery/styles/image-gallery.css";
import './bella.css';

const PREFIX_URL = 'images/bella/';

class Bella extends Component {

  render() {

    let images = [];
    for (let i = 1; i < 31; i++) {
      console.log(`"${PREFIX_URL}${i}.jpg"`);
      images.push({
        original: (`${PREFIX_URL}${i}.jpg`)
      });
    }
 
    return (
      <div>
        <ImageGallery items={images} showThumbnails={false} />
        <h4>Photos by Kimbeley Kitzmiller, Greg Katchmar, and Jesse Estes</h4>
      </div>
    );
  }
 
}

export default Bella