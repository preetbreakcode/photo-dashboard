import { styled } from '@mui/system';

const StyledInput = styled('input')({
  background: 'rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  borderRadius: '2rem',
  width: '80%',
  height: '3rem',
  padding: '1rem',
  margin: '10px',
  border: 'none',
  outline: 'none',
  color: '#3c354e',
  fontSize: '1rem',
  fontWeight: 'bold',

  '&:: placeholder': {
    color: '#b9abe099',
    fontWeight: '100',
    fontSize: '1rem'
  }
});

export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}


