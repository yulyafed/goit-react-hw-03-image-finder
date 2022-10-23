import BeatLoader from 'react-spinners/ClipLoader';

export const Loader = ({ isLoading}) => {
  return (
    <BeatLoader
      color="green"
      loading={isLoading}
      size={80}
      aria-label="Loading Spinner"
    />
  );
};
