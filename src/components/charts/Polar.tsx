import { FC, useEffect, useRef } from 'react';

type PolarAreaChartProps = {
  data: number[];
  labels: string[];
  maxValue?: number;
  title?: string;
};

export const PolarChart: FC<PolarAreaChartProps> = ({ data, labels, maxValue, title }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const padding = 60;
    const radius = Math.min(width, height) / 2 - padding;

    const pointsCount = labels.length;
    const angleStep = (2 * Math.PI) / pointsCount;

    const scaleMax = maxValue ?? Math.max(...data, 1);
    const scaleMin = 0;

    // Draw concentric circles (grid)
    ctx.strokeStyle = '#e5e7eb'; // neutral-200
    ctx.lineWidth = 1;

    const levels = 5;
    for (let level = 1; level <= levels; level++) {
      const r = (radius / levels) * level;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw axis lines and labels
    ctx.strokeStyle = '#9ca3af'; // neutral-400
    ctx.fillStyle = '#374151'; // neutral-700
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < pointsCount; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // axis line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // label (slightly outside the radius)
      const labelX = centerX + (radius + 20) * Math.cos(angle);
      const labelY = centerY + (radius + 20) * Math.sin(angle);
      ctx.fillText(labels[i], labelX, labelY);
    }

    // Draw data sectors
    const colors = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#22d3ee'];

    for (let i = 0; i < pointsCount; i++) {
      const valueRatio = (data[i] - scaleMin) / (scaleMax - scaleMin);
      const r = radius * valueRatio;
      const startAngle = i * angleStep - Math.PI / 2;
      const endAngle = startAngle + angleStep;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, r, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length] + 'cc'; // add transparency
      ctx.fill();
      ctx.strokeStyle = colors[i % colors.length];
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Title
    if (title) {
      ctx.fillStyle = '#374151'; // neutral-700
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, centerX, padding / 2);
    }

    // Legend
    const legendX = width - 140;
    let legendY = 40;
    const radiusLegend = 8;

    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < pointsCount; i++) {
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(legendX + radiusLegend, legendY + radiusLegend, radiusLegend, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#374151'; // neutral-700
      ctx.fillText(labels[i], legendX + radiusLegend * 2 + 8, legendY + radiusLegend);

      legendY += 28;
    }
  }, [data, labels, maxValue, title]);

  return (
    <div className="w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10">
      <canvas ref={canvasRef} width={400} height={400} className="h-auto w-full" />
    </div>
  );
};
