import logo from '../assets/burger.png'
import navBurger from '../assets/burgernav.png'
import burgerImg from '../assets/burger2.png'
import burgerVideo from '../assets/burger.mp4'
import classicBurger from '../assets/b1.webp'
import spicyBurger from '../assets/b2.jpg'
import champetreBurger from '../assets/b3.jpg'
import veggieBurger from '../assets/b4.webp'
import { BurgerModel } from './components/BurgerModel'
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaHouse,
  FaUtensils,
  FaCircleInfo,
  FaTags,
  FaLocationDot,
  FaCalendarDays,
  FaFireFlameCurved,
  FaLeaf,
  FaStar,
  FaHeart,
  FaArrowRight,
  FaPlus,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa6'

const navItems = [
  ['Accueil', 'accueil', FaHouse],
  ['Menu', 'menu', FaUtensils],
  ['À propos', 'apropos', FaCircleInfo],
  ['Nos offres', 'offres', FaTags],
  ['Contact', 'contact', FaLocationDot],
]

const features = [
  [FaLeaf, 'Ingrédients', 'premium', 'Sélection rigoureuse des meilleurs produits pour un goût authentique.'],
  [FaFireFlameCurved, 'Cuisson', 'maîtrisée', 'Grillés à la perfection pour des saveurs intenses et incomparables.'],
  [FaStar, 'Recettes', 'uniques', 'Des créations exclusives imaginées par nos chefs passionnés.'],
  [FaHeart, 'Fait avec', 'passion', 'Chaque burger est préparé avec amour pour une expérience inoubliable.'],
]

const burgers = [
  ['Le Classic House', 'Steak Black Angus, cheddar fondant, salade, tomates, oignons rouges, sauce maison.', '14,90 €', '★', classicBurger],
  ['Le Spicy Lover', 'Poulet croustillant, cheddar, jalapeños, sauce spicy, salade croquante.', '13,90 €', '♨', spicyBurger],
  ['Le Champêtre', 'Steak Black Angus, fromage de chèvre, roquette, tomates séchées, sauce miel moutarde.', '15,90 €', '▰', champetreBurger],
  ['Le Végé Gourmand', 'Galette de légumes rôtis, cheddar, guacamole, salade, oignons rouges.', '12,90 €', '▰', veggieBurger],
]

const testimonials = [
  ['Thomas L.', 'Une expérience incroyable ! Les burgers sont tout simplement les meilleurs que j’ai jamais goûtés.'],
  ['Sophie M.', 'Ingrédients frais, cuisson parfaite et service au top. Je recommande à 100% !'],
  ['Julien D.', 'Une explosion de saveurs à chaque bouchée. On sent la passion dans chaque détail.'],
  ['Marie C.', 'Les burgers sont absolument délicieux ! Je reviens chaque semaine, c\'est devenu mon restaurant préféré.'],
  ['Luc P.', 'Qualité exceptionnelle, portions généreuses et accueil chaleureux. C\'est la vraie cuisine de burger !'],
  ['Antoine R.', 'Rien à redire ! Chaque burger est une véritable création culinaire. Bravo à l\'équipe !'],
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Burger House">
        <img src={logo} alt="Burger House" />
      </a>
      <nav className="burger-nav" aria-label="Navigation principale">
        <img src={navBurger} alt="" className="burger-nav-image" />
        <div className="burger-nav-items">
          {navItems.map(([label, href, Icon], index) => (
            <a key={label} href={`#${href}`} className={index === 0 ? 'active' : ''}>
              <Icon aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </nav>
      <a className="reserve-top" href="#contact">
        <FaCalendarDays aria-hidden="true" />
        Réserver
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><FaFireFlameCurved aria-hidden="true" /> N°1 des burgers gourmets</div>
        <h1>
          Des burgers
          <span>d’exception</span>
        </h1>
        <p>Des ingrédients premium, sélectionnés avec passion pour une expérience gustative incomparable.</p>
        <div className="hero-actions">
          <a href="#menu" className="primary-btn">Découvrir le menu <FaArrowRight aria-hidden="true" /></a>
          <a href="#contact" className="secondary-btn">Réserver une table <FaCalendarDays aria-hidden="true" /></a>
        </div>
        <div className="mini-proofs" aria-label="Points forts">
          <div><FaFireFlameCurved aria-hidden="true" /><strong>Grillés<br />à la flamme</strong></div>
          <div><FaLeaf aria-hidden="true" /><strong>Ingrédients<br />100% frais</strong></div>
          <div><FaStar aria-hidden="true" /><strong>Qualité<br />premium</strong></div>
        </div>
      </div>
      <div className="hero-visual" aria-label="Burger en vedette">
        <div className="halo" />
        <div className="dot-field" />
        <BurgerModel />
        <div className="plate" />
        <div className="scroll-cue">
          <span />
          Découvrez notre burger en 3D
        </div>
      </div>
    </section>
  )
}

function FeatureStrip() {
  return (
    <section id="apropos" className="feature-strip" aria-label="Avantages">
      {features.map(([Icon, first, second, text]) => (
        <article key={first}>
          <div className="feature-icon"><Icon aria-hidden="true" /></div>
          <h3>{first}<br /><span>{second}</span></h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  )
}

function BurgerShowcase() {
  return (
    <section className="burger-showcase">
      <video src={burgerVideo} className="showcase-image" autoPlay loop muted playsInline preload="auto" />
    </section>
  )
}

function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="section-heading">
        <p>Notre sélection</p>
        <h2>Nos <span>burgers</span> stars</h2>
        <a href="#menu">Voir tout le menu <span>→</span></a>
      </div>
      <div id="offres" className="cards">
        {burgers.map(([name, description, price, tag, image]) => (
          <article className="burger-card" key={name}>
            <div className="card-image">
              <img src={image} alt={name} />
            </div>
            <div className="card-body">
              <h3>{name} <span>{tag}</span></h3>
              <p>{description}</p>
              <div className="card-footer">
                <strong>{price}</strong>
                <button aria-label={`Ajouter ${name}`}><FaPlus aria-hidden="true" /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Story() {
  return (
    <section id="histoire" className="story-section">
      <div className="story-container">
        <div className="story-content">
          <p className="story-tag">Notre histoire</p>
          <h2>Née de la <span>passion</span> pour le burger</h2>
          <p className="story-text">
            Fondée en 2015, BurgerLab est née de la passion de deux amis pour les burgers artisanaux. Ce qui a commencé comme un petit projet a rapidement évolué en un mouvement culinaire. Nous nous sommes engagés à créer des burgers d'exception, en utilisant uniquement des ingrédients frais et premium.
          </p>
          <p className="story-text">
            Chaque burger est une création unique, élaborée avec attention et expertise. De la sélection du pain à la cuisson parfaite de la viande, chaque détail compte. Aujourd'hui, BurgerLab est reconnu comme l'une des meilleures adresses pour les burgers gourmets en France.
          </p>
          <div className="story-stats">
            <article>
              <strong>9K+</strong>
              <p>Clients satisfaits</p>
            </article>
            <article>
              <strong>50+</strong>
              <p>Créations exclusives</p>
            </article>
            <article>
              <strong>100%</strong>
              <p>Ingrédients frais</p>
            </article>
          </div>
        </div>
        <div className="story-image">
          <img src={burgerImg} alt="Burger Premium" />
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials" aria-label="Avis clients">
      <h2>Ils <span>parlent</span> de nous</h2>
      <div className="testimonial-grid">
        {testimonials.map(([name, text]) => (
          <article key={name}>
            <div className="quote"><FaQuoteLeft aria-hidden="true" /></div>
            <p>{text}</p>
            <div className="person">
              <div className="avatar">{name.charAt(0)}</div>
              <strong>{name}</strong>
            </div>
            <div className="stars">★ ★ ★ ★ ★</div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-grid">
        <div>
          <img src={logo} alt="Burger House" className="footer-logo" />
        </div>
        <div>
          <h4>À propos</h4>
          <p>Des burgers d’exception préparés avec des ingrédients premium pour une expérience gustative unique.</p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter/X"><FaXTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube /></a>
          </div>
        </div>
        <div>
          <h4>Navigation</h4>
          <a>Accueil</a><a>Menu</a><a>À Propos</a><a>Nos Offres</a><a>Contact</a>
        </div>
        <div>
          <h4>Informations</h4>
          <a>Réserver une table</a><a>Livraison</a><a>FAQ</a><a>Recrutement</a><a>Mentions légales</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p><FaLocationDot aria-hidden="true" /> 123 Rue des Saveurs<br />75000 Paris</p>
          <p><FaPhone aria-hidden="true" /> 01 23 45 67 89</p>
          <p><FaEnvelope aria-hidden="true" /> contact@burgerhouse.fr</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Burger House. Tous droits réservés.</span>
        <span>Fait par mabsdev.</span>
        <span>CGV&nbsp;&nbsp;|&nbsp;&nbsp;Confidentialité</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main className="page-shell">
      <Header />
      <Hero />
      <FeatureStrip />
      <BurgerShowcase />
      <Menu />
      <Story />
      <Testimonials />
      <Footer />
    </main>
  )
}
