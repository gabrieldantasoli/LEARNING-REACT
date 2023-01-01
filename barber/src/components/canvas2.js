import React from "react";

export default class DrawingCanvas extends React.Component {
    canvasRef = React.createRef();
    isPainting = false;
    // Coordenadas do mouse
    lastX = 0;
    lastY = 0;
    // Cores e tamanho da linha
    lineColor = '#000000';
    lineWidth = 10;
  
    componentDidMount() {
      this.canvas = this.canvasRef.current;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = this.lineColor;
    }
  
    startPaint = (event) => {
      const x = event.nativeEvent.offsetX;
      const y = event.nativeEvent.offsetY;
      this.isPainting = true;
      this.lastX = x;
      this.lastY = y;
    }
  
  
    endPaint = () => {
      this.isPainting = false;
    }

    

    // Coordenadas intermediárias para suavizar a linha
  points = [];

  paint = (event) => {
    if (this.isPainting) {
      const x = event.nativeEvent.offsetX;
      const y = event.nativeEvent.offsetY;
      this.points.push({ x, y });
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.points[0].x, this.points[0].y);
      for (let i = 1; i < this.points.length - 2; i++) {
        const xc = (this.points[i].x + this.points[i + 1].x) / 2;
        const yc = (this.points[i].y + this.points[i + 1].y) / 2;
        this.ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
      }
      // Desenha a última curva quadrática com a coordenada final como destino
      this.ctx.quadraticCurveTo(
        this.points[this.points.length - 2].x,
        this.points[this.points.length - 2].y,
        this.points[this.points.length - 1].x,
        this.points[this.points.length - 1].y
      );
      this.ctx.stroke();
    } else this.ctx.closePath();
  }

  



  
    render() {
      return (
        <canvas width={500} height={500}
          ref={this.canvasRef}
          onMouseDown={this.startPaint}
          onMouseUp={this.endPaint}
          onMouseMove={this.paint}
        />
      );
    }
  }