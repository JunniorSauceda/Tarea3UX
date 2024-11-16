import Button from '@mui/material/Button';
import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <div className="head-section">
      <img
        src="https://64.media.tumblr.com/b1ea7c1613d9a4a53ddabc9256e0597b/60fd2afd4f8883df-30/s640x960/2c030533fab634c9185f2413696e61ec83cfa87e.gifv" 
        alt="Header img"
        className="head-background"
      />
      <div className="head-content">
        <h1 className="head-description">
          Hola Ing. no le preste atencion a esto, solo es para que no se vea tan vacia la pagina :D
        </h1>
        <div className='head-buttons'>
          <Button variant="contained" href="https://youtu.be/urTgr8EVaJw?si=rmwaHfYMCBcRRi4j" sx={{
            marginRight: '16px',
            borderColor: 'black', 
            backgroundColor: 'darkgray',
            color: 'black'}}>
            peak
          </Button>
          <Button variant="outlined" href="https://youtu.be/J7blJ2k9tGE?si=-MaFUPdVz1QbIvDm" sx={{
            marginLeft: '16px',
            borderColor: 'black', 
            backgroundColor: 'darkgray',
            color: 'black'}}>
            Referencia
          </Button>
          </div>
      </div>
      
    </div>
  );
};


export default HeaderSection;