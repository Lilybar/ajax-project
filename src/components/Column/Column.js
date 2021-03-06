import React from 'react';
import styles from './Column.scss';
import List from '../List/List.js';
import PropTypes from 'prop-types';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <main className={styles.component}>
        <h3 className={styles.title}>{this.props.colTitle}</h3>
      </main>
    )
  }
}

export default Column;