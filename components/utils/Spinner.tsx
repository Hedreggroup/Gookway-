import React from 'react';
import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'white',
};

interface SpinnerProps {
  color?: string;
  loading?: boolean;
  size:number
}

const Spinner: React.FC<SpinnerProps> = ({ color="white", loading = true, size }) => {
  return (
    <ClipLoader
      color={"white"}
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    
  );
};

export default Spinner;
