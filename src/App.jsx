import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 const arr = [
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "0",
   "+",
   "-",
   "/",
   "*",
   "=",
   "C",
   ".",
 ];
const App = () => {
  const [val,setVal]=useState('');
  const handleChange=(e)=>{
    setVal(e.target.value);

  }
  const handleClick=(e)=>{
    e.preventDefault();
    const id=e.target.id;
    if(id=='C') setVal("")
    else if(id=='='){
  handleSubmit();
  }
    else setVal(val=>val+id);
    
  }
  const handleSubmit=()=>{
    try{
      const ans=eval(val);
      setVal(ans);
    }
    catch(err){
       toast.error("Invalid Input !", {
         position: "top-center",
       });
    }
  }
 
  return (
    <div className="container bg-red-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold p-3 m-3">Calculator</h1>
      <form>
        <input
          type="text"
          className="rounded-lg m-5 p-3"
          value={val}
          onChange={handleChange}
        />
        <div
          className="grid grid-cols-4 grid-flow-row gap-4 items-center "
          onClick={handleClick}
        >
          {arr.map((item, idx) => (
            <button
              className="rounded-md bg-red-100 px-4 py-2 hover:bg-red-200"
              id={item}
              key={item}
            >
              {item}
            </button>
          ))}
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default App;
