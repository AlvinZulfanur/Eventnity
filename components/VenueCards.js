import React from "react"

function VenueCards({ venue, location, city, ClassName, image }) {
  const addClassName = "className" ? `${ClassName}` : ""
  return (
    <>
      <div
        className={`bg-white shadow-2xl px-2 lg:px-7 py-9 lg:w-72 w-44 rounded-[30px] absolute ${addClassName}`}
      >
        <h2 className="font-mono font-medium text-xl uppercase text text-gray-500 mb-4">
          {venue}
        </h2>
        <p className="font-mono font-medium uppercase text-2xl text-gray-800 mb-6">
          {location}
        </p>
        <div className="flex items-center gap-2">
          <h2 className="font-mono font-medium text-sm text-gray-500">
            {city}
          </h2>
          <img src={image} />
        </div>
      </div>
    </>
  )
}

export default VenueCards
