import { useState } from "react";
import "./App.css";

function App() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState(0);

  const handleBin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBin(event.target.value);
  };

  const convertToDecimal = () => {
    setDec(parseInt(bin, 2));
  };

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    convertToDecimal();
  };

  return (
    <>
      <main className="mx-auto h-screen w-auto sm:w-96 flex items-center flex-col justify-center">
        <div className="border shadow-2xl flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl mt-8">
            Binary to Decimal conversion
          </h2>
          {/**Container of the input & the submit button */}
          <div className="mt-8 sm:flex sm:justify-center sm:items-center align-middle">
            <form noValidate onSubmit={onSubmit}>
              <input
                type="text"
                className="m-2 py-2 px-2 shadow-2xl rounded border border-solid border-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                value={bin}
                onChange={handleBin}
                placeholder="Binary number only 0 & 1"
                pattern="[0-1]*"
                inputMode="numeric"
                required
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid binary number (0 or 1 only)
              </span>
              <button
                onClick={convertToDecimal}
                type="button"
                className="mx-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 group-invalid:pointer-events-none group-invalid:opacity-30"
              >
                Convert
              </button>
            </form>
          </div>
          {/**Container for the result of the value */}
          <div className="mb-8 mt-2 w-48 flex items-center flex-col justify-center gap-2">
            <p>
              Binary: <span className="font-bold">{bin}</span>
            </p>
            <p>
              Decimal: <span className="font-bold">{dec}</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
