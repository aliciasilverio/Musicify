import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import MusicVideos from './videoResults/musicVideos';
// import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <div>
      <MusicVideos></MusicVideos>
    </div>
  )
};

export default App;

//     <Routes>
//       <Route 
//         path='/'
//         element={<MusicVideos />}
//       />    
//       <Route
//         path='/favorites'
//         element={<Favorites />}
//       />
//       </Routes>
//   )
// };


