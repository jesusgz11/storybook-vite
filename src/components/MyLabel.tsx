type MyLabelProps = {
  label: string;
  size?: 'basic' | 'normal' | 'large';
  allCaps?: boolean;
};

const MyLabel = ({ label, size = 'basic', allCaps = false }: MyLabelProps) => {
  return (
    <span className={`${size}`}>{allCaps ? label.toUpperCase() : label}</span>
  );
};

export default MyLabel;
