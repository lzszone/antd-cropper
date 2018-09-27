import React, {Component, createRef} from 'react';
import ReactCropper from '@urfri/react-cropper';
import antd from 'antd';

const {Button, Slider} = antd;

export default class AntdCropper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratio: 1,
      cropperRef: createRef()
    };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleRatioChange = this.handleRatioChange.bind(this)
  }

  handleConfirm() {
    const {state: {cropperRef}} = this;
    cropperRef.confirm()
  }

  handleRatioChange(ratio) {
    this.setState({ratio})
  }

  render() {
    const {
      props: {toBase64, toBlob, file, confirmText},
      state: {ratio},
      handleRatioChange,
      handleConfirm
    } = this;

    return (
      <div>
        <ReactCropper toBase64={toBase64} toBlob={toBlob} ratio={ratio} file={file} />
        <Slider onChange={handleRatioChange} step={0.2} min={-2} max={2} vertical value={ratio} />
        <Button onClick={handleConfirm} >{confirmText}</Button>
      </div>
    )
  }
}