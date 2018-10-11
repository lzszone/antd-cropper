import React, {Component, createRef} from 'react';
import ReactCropper from '@urfri/react-cropper';
import {Button, Slider} from 'antd';

export default class AntdCropper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratio: 1,
      cropperRef: createRef(),
      src: undefined
    };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleRatioChange = this.handleRatioChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileChange(props.file)
  }

  handleConfirm() {
    const {state: {cropperRef}} = this;
    cropperRef.current.confirm()
  }

  handleFileChange(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({src: reader.result})
    }
  }

  handleRatioChange(ratio) {
    this.setState({ratio})
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {state, props, handleFileChange} = this;
    if(nextProps.file !== props.file) {
      handleFileChange(nextProps.file)
    }
    if(
      nextProps.aspectRatio !== props.aspectRatio ||
      nextProps.toBase64 !== props.toBase64 ||
      nextProps.toBlob !== props.toBlob ||
      nextProps.confirmText !== props.confirmText ||
      nextState.ratio !== state.ratio ||
      nextState.src !== state.src
    ) {
      return true
    } else {
      return false
    }
  }

  render() {
    const {
      props: {toBase64, toBlob, confirmText, aspectRatio, width, height},
      state: {ratio, src, cropperRef},
      handleRatioChange,
      handleConfirm
    } = this;

    return (
      <div>
        <ReactCropper ref={cropperRef} aspectRatio={aspectRatio} toBase64={toBase64} toBlob={toBlob} ratio={ratio} src={src} width={width} height={height}/>
        <div>
          <Slider onChange={handleRatioChange} step={0.005} min={0.2} max={2} horizontal value={ratio} />
        </div>
        <Button onClick={handleConfirm} >{confirmText}</Button>
      </div>
    )
  }
}