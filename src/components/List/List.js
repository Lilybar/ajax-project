import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    descriptiom: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
    imageSrc: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSource={this.props.imgSrc} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.props.columns}
        </div>
      </section>
    )
  }
}

export default List;