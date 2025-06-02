import { FC, useEffect, useRef } from 'react';

type Point = { x: number; y: number };

export const ScatterChart: FC<{
  data: Point[];
  xLabel?: string;
  yLabel?: string;
  title?: string;
  pointColor?: string;
}> = ({
  data = [],
  xLabel = 'X Axis',
  yLabel = 'Y Axis',
  title = 'Scatter Chart',
  pointColor = '#3b82f6', // blue-500
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const padding = 50;
    const bottomPadding = 70;
    const leftPadding = 70;

    ctx.clearRect(0, 0, width, height);

    // Find min/max for scaling
    const xValues = data.map((p) => p.x);
    const yValues = data.map((p) => p.y);
    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);

    const chartWidth = width - leftPadding - padding;
    const chartHeight = height - bottomPadding - padding;

    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb'; // neutral-200
    ctx.lineWidth = 1;

    const ySteps = 5;
    for (let i = 0; i <= ySteps; i++) {
      const y = padding + (chartHeight / ySteps) * i;
      ctx.beginPath();
      ctx.moveTo(leftPadding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    const xSteps = 5;
    for (let i = 0; i <= xSteps; i++) {
      const x = leftPadding + (chartWidth / xSteps) * i;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - bottomPadding);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#9ca3af'; // neutral-400
    ctx.lineWidth = 2;

    // Y axis
    ctx.beginPath();
    ctx.moveTo(leftPadding, padding);
    ctx.lineTo(leftPadding, height - bottomPadding);
    ctx.stroke();

    // X axis
    ctx.beginPath();
    ctx.moveTo(leftPadding, height - bottomPadding);
    ctx.lineTo(width - padding, height - bottomPadding);
    ctx.stroke();

    // Draw Y axis labels
    ctx.fillStyle = '#374151'; // neutral-700
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = 0; i <= ySteps; i++) {
      const y = padding + (chartHeight / ySteps) * i;
      const value = yMax - ((yMax - yMin) / ySteps) * i;
      ctx.fillText(value.toFixed(2), leftPadding - 8, y);
    }

    // Draw X axis labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = 0; i <= xSteps; i++) {
      const x = leftPadding + (chartWidth / xSteps) * i;
      const value = xMin + ((xMax - xMin) / xSteps) * i;
      ctx.fillText(value.toFixed(2), x, height - bottomPadding + 6);
    }

    // Draw data points
    ctx.fillStyle = pointColor;
    data.forEach(({ x, y }) => {
      const px = leftPadding + ((x - xMin) / (xMax - xMin)) * chartWidth;
      const py = padding + ((yMax - y) / (yMax - yMin)) * chartHeight;
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Axis names
    ctx.fillStyle = '#374151';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';

    // X-axis name
    ctx.fillText(xLabel, width / 2, height - 20);

    // Y-axis name
    ctx.save();
    ctx.translate(20, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();

    // Title
    ctx.fillText(title, width / 2, 30);

    // Legend - draw circle instead of rect
    const legendX = width - 150;
    const legendY = 40;
    const radius = 8;

    ctx.fillStyle = pointColor;
    ctx.beginPath();
    ctx.arc(legendX + radius, legendY + radius, radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#374151';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('Data Points', legendX + radius * 2 + 8, legendY + radius);
  }, [data, xLabel, yLabel, title, pointColor]);

  return (
    <div className="w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
      <canvas ref={canvasRef} width={400} height={300} className="h-auto w-full" />
    </div>
  );
};
