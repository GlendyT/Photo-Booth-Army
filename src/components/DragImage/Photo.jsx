import React from "react";

const Photo = ({ image, inputRef, selectImage, addImage, changeColor, error, setError, messageError}) => {


  const handleColor = () => {
    selectImage()
  }

  return (
    <div className="flex flex-col items-center ">
               {error && <div className="bg-red-700 text-white rounded-lg p-2">{messageError}</div>}
      {image ? (
        <img
          src={image}
          alt=""
          className="px-2 pb-2 max-sm:pb-2 max-sm:px-1 w-64 max-sm:w-40"
        />
      ) : (
        <div
          className={` bg-dragimg bg-no-repeat bg-contain backdrop-blur-sm bg-white/40 ${
            changeColor === true
              ? " border-transparent bg-none"
              : " w-40 h-40 max-sm:w-36 max-sm:h-36 min-md:w-20 border-dashed border-4 border-gray-400"
          } `}
          onClick={handleColor}
        >
          <h1
            className={`text-center ${
              changeColor === true
                ? " text-transparent max-sm:text-xs max-sm:truncate"
                : "text-black max-sm:text-xs max-lg:text-sm max-xl:text-sm max-2xl:text-sm"
            }`}
          >
            Click to Add Your Photo
          </h1>
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={addImage}
        style={{ display: "none" }}
        accept="image/*"
      />
    </div>
  );
};

export default Photo;
