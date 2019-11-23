import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './HowTo.css';
import cx from 'classnames';
import img00 from './images/ingress00.jpg'
import img01 from './images/ingress01.jpg'
import img02 from './images/ingress02.jpg'
import img03 from './images/ingress03.jpg'
import img04 from './images/ingress04.jpg'
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class HowTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 0
    };
  }
  
  render() {
    const imgs = [img00, img01, img02, img03, img04];
    const panel = (no) => {
      return (
        <div key={no} className={cx("card", {'is-hidden': this.state.phase !== no})}>
          <div className="card-image">
            <figure className="image">
              <img className="helpImage" src={imgs[no]} alt={"image" + no}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <FormattedMessage id={"howto.ingress" + no}/>
            </div>
            <button className={cx("button is-link nav", {'is-hidden': this.state.phase === 0})}
               onClick={() => this.setState({phase: this.state.phase - 1})}>
              <FormattedMessage id="prev"/>&nbsp;
              <FontAwesomeIcon icon={faChevronCircleLeft}/>
            </button>
            <button className={cx("button is-link nav", {'is-hidden': this.state.phase === imgs.length - 1})}
               onClick={() => this.setState({phase: this.state.phase + 1})}>
              <FormattedMessage id="next"/>&nbsp;
              <FontAwesomeIcon icon={faChevronCircleRight}/>
            </button>
            <button className={cx("button is-link nav", {'is-hidden': this.state.phase !== imgs.length - 1})}
               onClick={() => window.close()}>
              <FormattedMessage id="close"/>&nbsp;
              <FontAwesomeIcon icon={faTimesCircle}/>
            </button>
          </div>
        </div>
      );
    };

    return (
      <div>
        {[...Array(imgs.length).keys()].map(i => panel(i))}
      </div>
    );
  }
}

export default withRouter(HowTo);
