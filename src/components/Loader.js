import hurryup from "./hurryup.gif";

const Loader = () => {
  return (
    <div className='loader'>
      <img src={hurryup} alt='Loading' />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loader;
