import "./footer.css";
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

const Footer = () => (
    <footer className="footer">
        <img className="footer__icon footer__icon_databiz" src={databiz} alt="databiz"></img>
        <img className="footer__icon footer__icon_audiophile" src={audiophile} alt="audiophile"></img>
        <img className="footer__icon footer__icon_meet" src={meet} alt="meet"></img>
        <img className="footer__icon footer__icon_maker" src={maker} alt="maker"></img>
    </footer>
);

export default Footer;
