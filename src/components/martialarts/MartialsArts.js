import React, { Component } from 'react'
import posed from 'react-pose'
import { Link, Element } from 'react-scroll'

// Components
import { MartialArtBlogNavigation } from '../tools/BlogNavigation'

// Styles
import '../../styles/blog.css'

const MartialArts_1 = require('../../images/martialsarts/martials_1.jpg')
const MartialArts_2 = require('../../images/martialsarts/martials_2.jpg')
const MartialArts_3 = require('../../images/martialsarts/martials_3.jpg')
const MartialArts_4 = require('../../images/martialsarts/martials_4.jpg')
const MartialArts_5 = require('../../images/martialsarts/martials_5.jpg')

const Container = posed.div({
  enter: { staggerChildren: 50 }
})

const Subsection = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
})

class MartialsArts extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="container-blog">
            <Element name="topPage" className="element_topPage" />
            <Subsection>
              <div className="summaryContainer">
                <Subsection>
                  <h1 className="title-blog">Les Arts Martiaux</h1>
                </Subsection>

                <Subsection>
                  <MartialArtBlogNavigation />
                </Subsection>
              </div>
            </Subsection>

            <Subsection>
              <div id="kungfu">
                <Element name="kungfu" className="element_presentation">
                  <h2 className="title-blog-section">Le Kung Fu Shaolin</h2>
                </Element>

                <p>
                  Cet art martial traditionnel suscite un intérêt sans cesse
                  grandissant qui dépasse de loin les limites de son lieu de
                  création : la Chine. L'aspect cinématographique avec les
                  productions de Hon Kong; surtout de Bruce LEE et Jackie CHAN,
                  a permis de populariser à travers le monde cette particularité
                  ancestrale de la culture chinoise.
                </p>
                <br />
                <p>Que signifie Kung Fu Shaolin ?</p>
                <br />
                <ul>
                  <li>
                    Kung veut dire: LA PRATIQUE, LA PATIENCE, LA VOLONTÉ, LE
                    COURAGE.
                  </li>
                  <li>Fu signifie: L'ÊTRE HUMAIN</li>
                  <li>Shaolin est: LA JEUNE FORÊT ou LA FORÊT VIERGE</li>
                </ul>
                <br />
                <p>
                  On pourrait donc traduire ce terme par: La pratique de l'homme
                  dans la forêt. Le Shaolin Kung Fu à travers des exercices
                  physiques précis cherche à la formation de l'homme vrai. Le
                  Kung Fu shaolin, peut pour le public être présenté simplement
                  sous 3 aspects:{' '}
                </p>
                <br />
                <ul>
                  <li>
                    <strong>Aspect martial</strong>: C'est en général celui qui
                    intéresse tout particulièrement le public non averti. Cette
                    approche permet au pratiquant de découvrir le côté martial
                    de l'art. Souvent il confond aspect sportif et martial.
                    C'est la vision de surface, mais elle est très importante,
                    car sans pratique des techniques de l'auto défense le Kung
                    Fu serait vidé de sa consistance. Nous devons aussi faire en
                    sorte à ne pas confondre aspect martial et aspect sportif.{' '}
                  </li>
                  <br />
                  <li>
                    <strong>Aspect santé</strong> : L'approche martiale permet
                    au pratiquant de prendre conscience de la fragilité du
                    corps. Il cherche donc tout naturellement a en prendre soin.
                    Petit a petit sa pratique se modifie pour devenir moins
                    guerrière et plus posée. Il s'intéresse alors davantage à
                    l'art.
                  </li>
                  <br />
                  <li>
                    <strong>Aspect spirituel</strong>: Le Kung Fu fut mis en
                    pratique et développé pendant longtemps par les moines
                    Bouddhistes au monastère de Shaolin. Donc derrière
                    l'apparence physique se cache un entraînement spirituel et
                    philosophique, qui a pour objectif une recherche de sérénité
                    et de paix intérieure. L'élément fondamental de
                    l'entraînement du shaolin Kung Fu est de renforcer son corps
                    et son esprit par la maîtrise de la respiration.
                  </li>
                </ul>
                <br />
                <p>
                  <i>« Qui veut gravir une montagne commence par le bas » </i>
                </p>
                <br />
                <img src={MartialArts_1} alt="placeholder images" />
              </div>
              <div id="taichi">
                <Element name="taichi" className="element_taichi">
                  <h2 className="title-blog-section">Tai Chi et Chi Kung</h2>
                </Element>

                <img src={MartialArts_2} alt="placeholder images" />
              </div>
              <div id="style">
                <Element name="style" className="element_style">
                  <h2 className="title-blog-section">Notre Style</h2>
                </Element>
                <img src={MartialArts_3} alt="placeholder images" />
                <p>
                  Au début du XIème siècle, Grand-Maître Bodhidharma 28ème
                  patriarche aux Indes, s’installait dans le monastère de
                  Shaolin en Chine pour transmettre son enseignement ésotérique
                  du Bouddha à ses moines.
                </p>
                <p>
                  Il mit au point une méthode de méditation nouvelle le Chan
                  (Zen en japonais) ainsi qu’une technique de Kung-Fu. Ces
                  mouvements exécutés très souplement avec une grande
                  application et une forte concentration mentale.
                </p>
                <p>
                  Kung Fu ; Taï Chi chuan, du Chi Kung ont donc de part leur
                  création une nécessité de pratique avant tout thérapeutique
                  qui prend sa source dans la médecine traditionnelle orientale
                  et qui découle de la pensée de Confucius, du Taoïsme, et du
                  Bouddhisme.
                </p>
                <p>
                  Il n’y a donc pas de différences fondamentales dans l’objectif
                  recherché par ces différents arts.
                </p>
                <br />
                <p>
                  <strong>TAÏ-CHI-CHUAN : De l’interne vers l’externe</strong>
                </p>
                <br />
                <p>
                  Par rapport au kung fu ; le tai chi chuan se distingue par son
                  apparente détente musculaire. C’est une gymnastique
                  d’entretien traditionnelle, naturelle qui a pour but de
                  fortifier la circulation du sang et de renforcer la maîtrise
                  mentale et surtout nous permet de nous relaxer physiquement et
                  d’opérer un retour sur soi. Cet entraînement nous permet :
                </p>
                <br />
                <ul>
                  <li>
                    De respirer consciemment avec le nez afin de soulager les
                    tensions et de libérer les douleurs physiques.
                  </li>
                  <li>
                    De diminuer les souffrances mentales par une gestuelle
                    suivant un rythme lent, régulier et doux.{' '}
                  </li>
                  <li>De réfléchir et méditer sur les choses sages.</li>
                </ul>
                <br />
                <p>
                  Avec son célèbre principe de "Non Agir" ainsi que sur la
                  philosophie du Yin et du Yang et la théorie des Cinq Eléments
                  : Eau, Feu, Bois, Métal, Terre qui sont à la fois matières et
                  énergies.
                </p>
                <p>
                  CHI-KUNG : Dans ce travail des postures énergétiques ce qui
                  est fondamental c’est de mémoriser la concentration de la
                  respiration en soi-même. Cette méthode permet donc un travail
                  d’étirement des vertèbres et des tendons, des nerfs, des
                  muscles, mais aussi des articulations, tout en symétrie en
                  fonction des méridiens d'acupuncture et des points
                  énergétiques. Elle est basée sur des mouvements très simples
                  associés à des techniques respiratoires de la relaxation sans
                  contraintes pour acquérir un équilibre physique et mental. La
                  philosophie des pratiquants de Chi kung les amène à contrôler
                  l’état physique de leurs corps et d’en améliorer la
                  circulation sanguine par rapport à la respiration. Le mental
                  joue un rôle fondamental. Le pratiquant s'ouvre à la Nature
                  pour se relier aux diverses sources d'énergies de l'Univers.{' '}
                </p>
                <br />
                <p>
                  En conclusion la pratique du kung fu ; du Taï Chi chuan et du
                  Chi-Kung aide le moral et le physique à surmonter la fatigue
                  et à améliorer la santé. Ces pratiques présentent donc la
                  particularité d’être efficace pour accroître la force physique
                  et contribuer à une meilleure santé avec en compléments les
                  techniques d’auto massage et de massage qui ont pour but
                  l’entretien ; la capacité de combattre la maladie et la
                  recherche de la longévité, Ces arts sont le reflet d'un vécu
                  dont la richesse ne peut s'apprécier que par une pratique
                  journalière assidue.
                </p>
                <br />
                <p>
                  <i>
                    « Plus le sage donne aux autres, plus il en a pour lui-même
                    »{' '}
                  </i>
                </p>
              </div>
              <div id="soinsEnergetique">
                <Element
                  name="soinsEnergetiques"
                  className="element_soinsEnergetique"
                >
                  <h2 className="title-blog-section">Soins Énergétiques</h2>
                </Element>
                <img src={MartialArts_4} alt="placeholder images" />
                <p>
                  La Guadeloupe est un archipel d’îles situées dans les Petites
                  Antilles, entre l’océan Atlantique et la mer des Caraïbes.
                  Elle est constituée de deux îles : la Grande-Terre plate et
                  calcaire et la Basse-Terre montagneuse, volcanique et
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
                  pluriculturelle. Les Noirs sont majoritaires, originaires
                  d'Afrique, issus de l'histoire tragique de l'esclavage. Outre
                  cette population; on y trouve, une importante communauté
                  d'Indiens venus de l'Inde au lendemain de l'abolition de
                  l'esclavage (1848), des Libanais, des Syriens, des Haïtiens,
                  des Blancs békés et Blancs "pays", descendants des colons, et
                  bien sûr, les Français métropolitains ; les "métros", venus de
                  l'Hexagone, dit "métropole".{' '}
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
                  d’appartenance à une culture , il joue donc le rôle essentiel
                  dans ce ciment dans cette recherche de l'idée de peuple.{' '}
                </p>
                <br />
                <img src={MartialArts_5} alt="placeholder images" />
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
                  masse y ont bien sûr la côte (football ; cyclisme ; athlétisme
                  ; …) et les stars internationales sont assez nombreuses pour
                  faire vibrer le chauvinisme local. Les arts martiaux arrivent
                  tout de même à sortir leur épingle du jeu.{' '}
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
                  Le kung fu n’échappe pas à cette règle et il se développe
                  tranquillement. Il existe pour l’instant 5 clubs répartis dans
                  l’île. Environ 250 licenciés pratiquent cet art.{' '}
                </p>
                <br />
                <p>
                  <i>
                    Ile papillon La Guadeloupe, "Karukéra ", "l'île aux belles
                    eaux",{' '}
                  </i>
                </p>
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
                  <i class="fas fa-arrow-circle-up fa-3x" />
                </Link>
              </div>
            </Subsection>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default MartialsArts
