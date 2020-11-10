import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    imageSrc: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSource={this.props.imgSrc} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column colTitle={'Animals'} />
          <Column colTitle={'Plants'} />
          <Column colTitle={'Minerals'} />
        </div>
      </section>
    )
  }
}

export default List;