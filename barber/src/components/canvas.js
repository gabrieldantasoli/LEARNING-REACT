import React from "react";

class DrawingCanvas extends React.Component {
  canvasRef = React.createRef();
  ctx = null;
  isPainting = false;
  previousPos = { x: 0, y: 0 };
  lineWidth = 10;

  componentDidMount() {
    this.ctx = this.canvasRef.current.getContext("2d");
  }

  startPaint = (event) => {
    this.isPainting = true;
    this.previousPos = this.getCoords(event);
  };

  endPaint = () => {
    this.isPainting = false;
  };

  paint = (event) => {
    if (!this.isPainting) {
      return;
    }
    const currentPos = this.getCoords(event);
    this.drawLine(this.previousPos, currentPos);
    this.previousPos = currentPos;
  };

  getCoords = (event) => {
    const rect = this.canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  drawLine = (prevPos, currentPos) => {
    this.ctx.beginPath();
    this.ctx.moveTo(prevPos.x, prevPos.y);
    this.ctx.lineTo(currentPos.x, currentPos.y);
    this.ctx.strokeStyle = this.props.color;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = "round";
    this.ctx.stroke();
    this.ctx.closePath();
  };

  floodFill = (x, y, fillColor) => {
    // Obtém o objeto ImageData da imagem atual
    const imageData = this.ctx.getImageData(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
    // Chama a função floodFill
    this.floodFill(imageData, x, y, fillColor);
    // Atualiza a imagem do canvas com o novo ImageData
    this.ctx.putImageData(imageData, 0, 0);
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={500}
        height={500}
        onMouseDown={this.startPaint}
        onMouseUp={this.endPaint}
        onMouseMove={this.paint}
        onClick={(event) => this.floodFill(event.offsetX, event.offsetY, this.props.fillColor)}
      />
    );
  }
}

export default DrawingCanvas;

