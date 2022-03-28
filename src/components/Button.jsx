import { styled } from '@mui/system';

const SignUpButton = styled('button')({
  background: 'linear-gradient(to right, #14163c 0%, #03217b 79%)',
  textTransform: 'uppercase',
  borderRadius: '2rem',
  width: '60%',
  height: '3rem',
  padding: '1rem',
  cursor: 'pointer',
  color: 'white',
  border: 'none',
});

export default function Button({ content }) {
  return <SignUpButton>{content}</SignUpButton>;
}
