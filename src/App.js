import React, {useEffect,useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';

  export default function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({ keyword: 'rick' }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => 
          {
            return <div>
              <h4>{singleGif.title}</h4>
              <small>{singleGif.id}</small>
              <img src={singleGif.url } alt={singleGif.title} />
            </div>
            })
        }
      </section>
    </div>
  );
}