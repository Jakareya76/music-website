const Button = ({ children, styles }) => {
  return <button className={`border-2 rounded-xl px-6 py-2 border-slate-700 ${styles}`}>{children}</button>;
};

export default Button;
