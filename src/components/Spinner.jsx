import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading }) => {
  return (
    <>
      <div className="p-4 flex justify-center items-center">
        <ClipLoader color="#303F9F" loading={loading} size={300} />
      </div>
    </>
  );
};

export default Spinner;
