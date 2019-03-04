import React, { Component } from 'react'
import posed from 'react-pose'
import { Link, Element } from 'react-scroll'

// Components
import { SchoolBlogNavigation } from '../tools/BlogNavigation'

// Styles
import '../../styles/blog.css'

const school_1 = require('../../images/school/school_1.jpg')
const school_2 = require('../../images/school/school_2.jpg')
const school_3 = require('../../images/school/school_3.jpg')
const school_4 = require('../../images/school/school_4.jpg')
const school_5 = require('../../images/school/school_5.jpg')
const school_6 = require('../../images/school/school_6.jpg')

const Container = posed.div({
  enter: { staggerChildren: 50 }
})

const Subsection = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
})

class School extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="container-blog">
            <Element name="topPage" className="element_topPage" />
            <Subsection>
              <div className="summaryContainer">
                <Subsection>
                  <h1 className="title-blog">L'école</h1>
                  <p className="blog-date">
                    <i>28 Novembre 2019</i>
                  </p>
                </Subsection>
                <img src={school_6} alt="placeholder images" />
                <Subsection>
                  <SchoolBlogNavigation />
                </Subsection>
              </div>
            </Subsection>
            <Subsection>
              <div id="presentation">
                <Element name="presentation" className="element_presentation">
                  <h2 className="title-blog-section">
                    <i className="fas fa-asterisk" /> Présentation
                  </h2>
                </Element>

                <p>
                  Notre pratique s'inscrit à travers l'étude de techniques
                  martiales, où chaque élève devient un expérimentateur, un
                  chercheur qui veut <i>découvrir son être profond.</i> <br />
                  Dans ce cadre chaque pratiquant quelque soit son âge, son
                  niveau et ses capacités s'engage sur un chemin, sur une voie
                  où seule la persévérance lui permettra de progresser.
                </p>
                <br />
                <p>
                  <b>
                    La pratique du Kung Fu tel que nous l'entendons et que nous
                    voulons l'enseigner, s'adresse en premier lieu au corps,
                    mais doit en chaque occasion toucher aussi l'esprit.
                  </b>{' '}
                  C'est vouloir en permanence unir ce corps et cet esprit qui
                  constitue le fondement de notre art.
                </p>
                <br />
                <p>
                  <i>L’art du Kung Fu est à plusieurs étages.</i>
                </p>
                <br />
                <img src={school_1} alt="placeholder images" />
                <p>
                  L’intérêt de la pratique est de les gravir un à un avec les
                  difficultés liées à une ascension. Le voyage est merveilleux
                  car il vous renvoie en permanence en vous-même et il réclame
                  de la sincérité. L’effort physique souvent intense avec la
                  recherche de la force, de la vitesse, de la souplesse, de la
                  respiration,… ; la disponibilité mentale pour améliorer sa
                  mémoire, sa concentration ; sa respiration (et oui encore), sa
                  sérénité,…. demandent de se jeter corps et âmes dans cette
                  voie du Kung Fu. Mais attention les pièges sont nombreux et
                  l’évolution du monde moderne rend de plus en plus difficile
                  les possibilités de mettre en adéquation sa pratique et ses
                  objectifs.
                </p>
                <br />
                <p>
                  La <b>santé</b> est aussi une des priorités de notre façon de
                  pratiquer. Toute pratique physique qui n'assure pas un respect
                  de l'intégrité du corps est, selon nous, une ineptie.
                  Développer l'endurance, la force, la souplesse, le souffle,
                  limiter les problèmes de santé font parties intégrantes de
                  l'enseignement des arts martiaux.
                </p>
                <br />
                <p>
                  C'est donc une pratique en profondeur que nous recherchons. La
                  compétition ne représente que l'aspect sportif de notre
                  entraînement et donc nous ne la considérons pas comme une fin
                  en soi. Notre pratique, elle, doit petit à petit devenir
                  quotidienne, elle se doit de transparaître en tout acte, en
                  respectant un code moral et éthique définit par des règles qui
                  peu à peu constitueront le mode pensée propre de notre école.
                  Elles permettront aux élèves de se rappeler le sens de leur
                  pratique.
                </p>
              </div>
              <div id="logo">
                <Element name="logoEcole" className="element_logoEcole">
                  <h2 className="title-blog-section">
                    <i className="fas fa-asterisk" /> Le logo de l'école
                  </h2>
                </Element>

                <img src={school_2} alt="placeholder images" />
              </div>
              <div id="maitre">
                <Element name="maitre" className="element_maitre">
                  <h2 className="title-blog-section">
                    <i className="fas fa-asterisk" /> Notre Maitre
                  </h2>
                </Element>
                <img src={school_3} alt="placeholder images" />
                <p>
                  C’est en <b>1985</b> que nous avons rencontré{' '}
                  <b>Maître HUYNH CHIEU Long</b>.
                  <br />A l’époque au sein de l’association niçoise de kung fu
                  Shaolin Nous avons appris sous son enseignement les bases du
                  kung fu. Durant cette période le maître a participé activement
                  au développement des arts martiaux dans les alpes maritimes et
                  le sud de la France. (participation aux compétitions de la
                  FFKAMA ; réalisation de plusieurs festivals des arts
                  martiaux). Avec sa culture et sa sensibilité extrême orientale
                  ; pendant plusieurs années le maître a cherché à transmettre
                  les valeurs traditionnelles des arts martiaux. Pas toujours
                  facile à comprendre et pas toujours compris; il a formé
                  plusieurs dizaines de pratiquants qui ont pour la plupart
                  choisit de continuer leur chemin dans d’autres voies.
                </p>
                <br />
                <p>
                  Nous sommes toujours restés attachés à l’enseignement du
                  maître même après notre départ de la ville de Nice. Tout
                  naturellement après l’ouverture de l’école Karukéra Shaolin
                  Kung Fu ; nous enseignons donc les techniques que nous avons
                  apprises grâce à lui. Maintenant le maître effectue
                  annuellement un séjour parmi nous en Guadeloupe et continue à
                  nous faire partager ses connaissances. Et ce savoir est
                  transmis directement à nos propres enfants et à cette grande
                  famille que constituent nos élèves; l’histoire continue… Le
                  maître est désormais davantage tourné vers la voie médicale de
                  l’art. Il effectue des soins énergétiques et enseigne le tai
                  chi chuan à la pagode Hông hiên de Fréjus. Il effectue aussi
                  régulièrement des stages en Belgique et au Danemark.
                </p>
                <br />
                <p>
                  <i>
                    « L’arbre a ses racines, La rivière a sa source » « Les
                    disciples ont leur maître »{' '}
                  </i>
                </p>
              </div>
              <div id="karukera">
                <Element name="karukera" className="element_karukera">
                  <h2 className="title-blog-section">
                    {' '}
                    <i className="fas fa-asterisk" /> Karukéra
                  </h2>
                </Element>
                <img src={school_4} alt="placeholder images" />
                <p>
                  La <b>Guadeloupe</b> est un archipel d’îles situées dans les
                  Petites Antilles, entre l’océan Atlantique et la mer des
                  Caraïbes. Elle est constituée de deux îles : la Grande-Terre
                  plate et calcaire et la Basse-Terre montagneuse, volcanique et
                  recouverte d’une épaisse forêt tropicale.{' '}
                </p>
                <br />
                <p>
                  La Soufrière , volcan toujours en activité, heureusement
                  calme, se dresse dans le sud basse terre du haut de ses 1467
                  m. La Guadeloupe dispose de dépendances, chapelet de petites
                  iles dont les principales (habités) sont Marie- galante, les
                  Saintes et la Désirade.
                </p>
                <br />
                <p>
                  La Guadeloupe est un mélange d'origines et de cultures, assez
                  représentatif du reste du monde. Elle est multiethnique, et
                  pluriculturelle.{' '}
                  <i>
                    Les Noirs sont majoritaires, originaires d'Afrique, issus de
                    l'histoire tragique de l'esclavage. Outre cette population;
                    on y trouve, une importante communauté d'Indiens venus de
                    l'Inde au lendemain de l'abolition de l'esclavage (1848),
                    des Libanais, des Syriens, des Haïtiens, des Blancs békés et
                    Blancs "pays", descendants des colons, et bien sûr, les
                    Français métropolitains ; les "métros", venus de l'Hexagone,
                    dit "métropole".
                  </i>{' '}
                </p>
                <br />
                <p>
                  Au sein de cette population hétérogène, le brassage est très
                  important. L'appel des racines étant très fort, les échanges
                  avec l'Afrique, l'Inde, les pays de la Caraïbe, sont nombreux.
                  Le sentiment d'appartenance est donc souvent très mitigé: la
                  Guadeloupe est une terre de déracinés qui se sentent français
                  mais aussi, au moins autant, africain, indien et de plus en
                  plus caribéen. Ce sont là toutes les ambiguïtés de la
                  créolité, et beaucoup d'Antillais sont en quête de leur propre
                  identité. Le créole, langue parlé (de plus écrite
                  actuellement) est le principal élément de cette revendication
                  d’appartenance à une culture ,{' '}
                  <b>
                    il joue donc le rôle essentiel dans ce ciment dans cette
                    recherche de l'idée de peuple
                  </b>
                  .{' '}
                </p>
                <br />
                <img src={school_5} alt="placeholder images" />
                <p>
                  Malgré les divergences, ce mélange des genres se passe plutôt
                  bien en Guadeloupe. Les communautés coexistent dans une
                  tolérance plus ou moins partagée. Le Guadeloupéen n’est pas
                  toujours d'un abord facile car il est généralement très fier
                  voire susceptible. Mais s'il se sent respecté, il peut se
                  montrer très chaleureux.
                </p>
                <br />
                <p>
                  Le Guadeloupéen est par contre un féru de sport, comme
                  pratiquants ou comme supporters. Les sports médiatiques de
                  masse y ont bien sûr la côte{' '}
                  <i>(football ; cyclisme ; athlétisme ; …)</i> et les stars
                  internationales sont assez nombreuses pour faire vibrer le
                  chauvinisme local. Les arts martiaux arrivent tout de même à
                  sortir leur épingle du jeu.{' '}
                </p>
                <br />
                <p>
                  Comme partout on peu y retrouver à l’échelle de l’ile tout
                  type de pratique. Judo et Karaté ont historiquement ouvert la
                  voie. Mais à l’instar de ce qui se passe en France et sous
                  l’influence de jeunes guadeloupéens rentrant au pays après
                  leurs études ou une formation ; d’autres pratiques dans ce
                  domaine se sont développées : Viet vo dao ; Tea kwon do ;
                  Yoséikan budo ; Tai chi chuan ; etc.
                </p>
                <br />
                <p>
                  <b>
                    Le kung fu n’échappe pas à cette règle et il se développe
                    tranquillement. Il existe pour l’instant 5 clubs répartis
                    dans l’île. Environ 250 licenciés pratiquent cet art.
                  </b>{' '}
                </p>
                <br />
                <p>
                  <i>
                    Ile papillon La Guadeloupe, "Karukéra ", "l'île aux belles
                    eaux",{' '}
                  </i>
                </p>
                <img src={school_6} alt="placeholder images" />
              </div>
            </Subsection>
            <Subsection>
              <div className="goTopBlog">
                <Link
                  activeClass="active"
                  to="topPage"
                  smooth={true}
                  duration={1500}
                >
                  <i className="fas fa-arrow-circle-up fa-3x" />
                </Link>
              </div>
            </Subsection>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default School
