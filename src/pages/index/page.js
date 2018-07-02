import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';

// import apiConfig from '../../common/api';

import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li><Link to='/upload/upload'>上传图片</Link></li>
        <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
