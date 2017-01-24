import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';

const About = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    this.updateTitlebar(this.props);
  },
  componentWillUpdate : function (nextProps) {
    this.updateTitlebar(nextProps);
  },
  updateTitlebar : function (props) {
    this.props.setTitlebar(props.title);
  },
  render: () => (
    <main id="main-container">
      <aside id="main-aside">
        <div className="info">
          <h2 className="info-title">
            Présentation de la publication
          </h2>
        </div>
        <div className="info">
          <h2 className="info-title">
            Un projet éditorial relationnel
          </h2>
        </div>
        <div className="info">
          <h2 className="info-title">
            Editeur
          </h2>
        </div>
      </aside>
      <div id="main-content">
        <article id="article-main">
          <div id="article-body">
            <p>
              	WikiCreation est une publication scientifique en ligne nouvelle et novatrice. Son objet d’étude est la notion et l’acte de création dans tous leurs états, sous tous leurs aspects, selon toutes les approches. WikiCreation est donc ouverte à toutes les disciplines et a l’ambition de devenir une publication de référence dans le domaine des études de la création.
            </p>
            <p>
              Le comité scientifique de WikiCreation est international, comme son comité de lecture (peer review), qui sélectionne les articles qui lui sont soumis à partir d’une lecture en double aveugle.
            </p>
            <p>
              Cette publication en ligne est ouverte à tous les chercheurs, des spécialistes reconnus aux doctorants. Les articles en français sont traduits en anglais et inversement. Les articles dans une autre langue que le français ont aussi leur version anglaise. Si les articles publiés respectent les exigences académiques (références bibliographiques, notes, etc.), ils restent néanmoins accessibles à un public étendu.
            </p>
            <h2>
              Un projet éditorial relationnel
            </h2>
            <p>
              Le projet épistémologique et éditorial de WikiCreation est de type relationnel. Il est centré sur l’étude de la relation que la création entretient avec ses environnements. Dans chaque article, le concept de création est donc heuristiquement articulé à une autre notion, à un autre un concept, à un autre champ. Ainsi la création n’est-elle pas définie comme un absolu mais dans un réseau de relations.
            </p>
            <p>
              Chaque article s’évertue donc à montrer comment telle notion judicieusement choisie par affinité permet d’explorer, d’éclairer, d’enrichir, de nourrir, d’exemplifier, le concept de création, et réciproquement. L’étude de la relation entre deux, voire trois notions est donc le pivot de chaque article.
            </p>
            <p>
              Ces duos ou trios peuvent être des notions proches, comme « créativité et création », ou adverses comme « la création comme processus et la création comme résultat », ou contradictoires comme « création et destruction », ou différentes comme « sérendipité et création » ou « sommeil, rêve et création », ou encore « crise, changement et création », etc.
            </p>
            <p>
              WikiCreation permet ainsi à d’autres chercheurs ou groupes de chercheurs d’apporter des contributions distinctes sur les mêmes combinaisons.
            </p>
            <p>
              Les articles étudient l’acte créatif, qu’il soit artistique, scientifique, technologique, savant ou ordinaire, dans ses fonctions à la fois anthropologiques et sociétales. La création est donc le fil rouge de l’ensemble de la publication et son dénominateur commun. Un tel réseau, constitué en regard de notions ou concepts divers, permet ainsi de la circonscrire d’article en article.
            </p>
            <p>
              C’est donc une entreprise collective et éventuellement collaborative qui travaille sur la notion de création par la multiplication des points de vue et leur mise en tension dans un même espace numérique doté de moteurs de recherche et de moteurs sémantiques.
            </p>
            <h2>
              Editeur
            </h2>
            <p>
              Le comité de rédaction est constitué de Richard Conte (Poïéticien), Bernard Darras (Sémioticien), Christophe Genin (Philosophe).
            </p>
            <p>
              Institut ACTE UMR 8218<br/>
              Université Paris 1 Panthéon-Sorbonne & CNRS<br/>
              LabEx CAP
            </p>
          </div>
        </article>
      </div>
    </main>
  )
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.about.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(About);
