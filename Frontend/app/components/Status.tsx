import React from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';

type StatusProps = React.HTMLAttributes<HTMLDivElement> & {
  color: string;
  value: number;
  max: number;
};

const Status = ({ children, className, value, color, max, ...props }: StatusProps) => (
  <div
    className={classnames('relative h-2 text-sm rounded overflow-hidden', className)}
    {...props}
  >
    <motion.div
      className="h-full"
      style={{ backgroundColor: color }}
      initial={{ width: '0%' }}
      animate={{ width: `${(100 * value) / max}%` }}
      transition={{ type: 'spring', damping: 30 }}
    />
    <div className="absolute top-0 left-0 opacity-30 w-full h-full" style={{ backgroundColor: color }} />
  </div>
);

export default Status;

type StatusLabelProps = StatusProps & { label: string };
export const StatusLabel = ({
  value,
  color,
  max,
  label,
  ...props
}: StatusLabelProps) => (
  <div {...props}>
    <div className="mb-2 flex justify-between text-sm">
      <span>{label}</span>
      <span className="font-bold">{`${value} / ${max}`}</span>
    </div>
    <Status value={value} max={max} color={color} />
  </div>
);
