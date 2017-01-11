import React from 'react';

const Author = React.createClass({
  render: function () {
    return (
      <div id="author-profile">
        <img id="author-profile-exit" src="img/author-profile-exit.svg"/>
        <img className="author-pic" src="img/author-pic1.jpg"/>
        <h2 className="author-name">
          Kostantinos Vassiliou
        </h2>
        <p className="author-infos">
          Chargé d’enseignement, <br/>
          École des Beaux Arts d’Athènes.
        </p>
        <p className="author-desc">
          Konstantinos Vassiliou est docteur de l'université Paris 1 Panthéon-Sorbonne. Il est l'auteur du livre Pros tin technologia tis technis/Vers la technologie de l'art (2012, Plethron Press) et il a dirigé l'ouvrage Techni kai Dimiourgikotita/Art et créativité (Plethron Press, 2014). Il publie sur la théorie de l'art et de la culture, sujets qu'il enseigne à l'Ecole des Beaux Arts d'Athènes.
        </p>
        <h2 className="articles">
          Articles
        </h2>
        <div className="article-category">
          <h3 className="article-category-title">
            Crise économique
          </h3>
          <ul className="article-titles">
            <li>
              <a href="#">
                La Grèce et la création
              </a>
            </li>
            <li>
              <a href="#">
                Photographie et création
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Author;
