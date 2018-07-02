import React, { Component } from 'react';
import { connect } from 'dva';


@connect((state) => {
  console.log('---->', state);
  return {

  };
})
class UploadImage extends Component {

  render() {
    return (
      <div>
        上传图片
    </div>
    );
  }

}

export default UploadImage;
