import React from 'react';

const Home = ({ isOpen }) => {
  return (
    <div>
      <h2>Accueil</h2>
      {isOpen ? (
        <div>
          <p>Contenu supplémentaire lorsque la barre latérale est ouverte.</p>
        </div>
      ) : (
        <div>
          <p>Bienvenue sur la page d'accueil de mon site.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card title="Carte 1" />
            <Card title="Carte 2" />
            <Card title="Carte 3" />
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ title }) => {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <h3>{title}</h3>
      <p>Contenu de la carte</p>
    </div>
  );
};

export default Home;
