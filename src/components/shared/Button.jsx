import { Link } from 'react-router-dom';

export default function Button({ children, to, href, variant = 'primary', size = 'md', className, onClick, type }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-light shadow-lg hover:shadow-xl active:scale-[0.98]',
    secondary: 'bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg active:scale-[0.98]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary active:scale-[0.98]',
    ghost: 'text-primary hover:bg-muted active:scale-[0.98]',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className || ''}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button type={type || 'button'} className={classes} onClick={onClick}>{children}</button>;
}
