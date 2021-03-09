import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQHzhgiwwkec9w/profile-displayphoto-shrink_800_800/0/1599769133195?e=1620864000&v=beta&t=dMcFt4eDfZK4ZpHuw5_pE87oZhVwdlKzDsCQcQTsjiA"
          nome="Noelly Costa de Araújo"
          descricao="Oi, eu sou a Noelly. Sou o estudante de desenvolvimento Web Full Stack Labenu. Gosto dos desafios elaborados pela Labenu."
        />

        <ImagemButton
          imagem="https://www.flaticon.com/svg/vstatic/svg/2026/2026596.svg?token=exp=1615316172~hmac=08eba2906598e3b7825fb59b509c5aaa"
          texto="Ver mais"
        />
      </div>

      < div className="mail">

        <div>
          <CardPequeno
            imagem="https://www.flaticon.com/br/premium-icon/icons/svg/2152/2152649.svg"
            email="noelly1232@gmail.com"
          />

          <CardPequeno
            imagem="https://www.flaticon.com/svg/vstatic/svg/1179/1179981.svg?token=exp=1615323726~hmac=83691adbf1a0c009d085a1062ae7afc7"
            endereco="Arapiraca-AL"
          />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://portaltamces.com.br/wp-content/uploads/2015/09/brasao-de-armas-5.jpg"
          nome="Lojinha no instagram"
          descricao="Pinturas feitas à mão em brim e sarja do brasão de Orleans e Bragança."
        />

        <CardGrande
          imagem="https://thumbs.dreamstime.com/z/galho-seco-85367132.jpg"
          nome="Softwares de gestão"
          descricao="Quebra galhos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div >
  );
}

export default App;
