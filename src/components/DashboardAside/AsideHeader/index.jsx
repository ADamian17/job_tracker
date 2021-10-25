import { Tertiary } from '../../UI/Heading';

import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';

import "./AsideHeader.scss";

const AsideHeader = ({ toggle, setToggle }) => {
  return (
    <section className="aside__header">
      <div className="aside__header__title">
        <Tertiary text="track that job" />
        <strong>Jobs Board</strong>
      </div>

      <figure
        className="aside__header__icon"
        onClick={() => setToggle(!toggle)}>
        <img src={toggle ? close : hamburger} alt="menu icon" />
      </figure>
    </section>
  )
}

export default AsideHeader;