import { FC, useEffect, useRef } from 'react';

export const AreaChart: FC<{ data: number[]; labels: string[] }> = ({ data = [], labels = [] }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padding = 40;
    const bottomPadding = 60;
    const leftPadding = 60;

    const chartWidth = width - leftPadding - padding;
    const chartHeight = height - bottomPadding - padding;
    const maxValue = Math.max(...data);
    const minValue = 0;

    const getX = (i: number) => leftPadding + (chartWidth / (data.length - 1)) * i;
    const getY = (val: number) => padding + ((maxValue - val) / (maxValue - minValue)) * chartHeight;

    // Grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;

    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(leftPadding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    for (let i = 0; i < labels.length; i++) {
      const x = getX(i);
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - bottomPadding);
      ctx.stroke();
    }

    // Y axis labels
    ctx.fillStyle = '#374151';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      const value = maxValue - ((maxValue - minValue) / 5) * i;
      ctx.fillText(value.toFixed(0), leftPadding - 8, y);
    }

    // X axis labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = 0; i < labels.length; i++) {
      ctx.fillText(labels[i], getX(i), height - bottomPadding + 6);
    }

    // Axes
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(leftPadding, padding);
    ctx.lineTo(leftPadding, height - bottomPadding);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(leftPadding, height - bottomPadding);
    ctx.lineTo(width - padding, height - bottomPadding);
    ctx.stroke();

    // Area Fill (straight)
    ctx.beginPath();
    ctx.moveTo(getX(0), height - bottomPadding);
    for (let i = 0; i < data.length; i++) {
      ctx.lineTo(getX(i), getY(data[i]));
    }
    ctx.lineTo(getX(data.length - 1), height - bottomPadding);
    ctx.closePath();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
    ctx.fill();

    // Curved Line
    ctx.beginPath();
    ctx.moveTo(getX(0), getY(data[0]));
    for (let i = 0; i < data.length - 1; i++) {
      const xMid = (getX(i) + getX(i + 1)) / 2;
      const yMid = (getY(data[i]) + getY(data[i + 1])) / 2;
      ctx.quadraticCurveTo(getX(i), getY(data[i]), xMid, yMid);
    }
    ctx.quadraticCurveTo(
      getX(data.length - 1),
      getY(data[data.length - 1]),
      getX(data.length - 1),
      getY(data[data.length - 1])
    );
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Axis titles
    ctx.fillStyle = '#374151';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Month', width / 2, height - 10);

    ctx.save();
    ctx.translate(16, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Revenue ($)', 0, 0);
    ctx.restore();

    // Legend
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(width / 2 - 30, 0, 12, 12);
    ctx.fillStyle = '#374151';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Revenue', width / 2 - 12, 6);
  }, [data, labels]);

  return (
    <div className="w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
      <canvas ref={canvasRef} width={400} height={200} className="h-auto w-full" />
    </div>
  );
};
