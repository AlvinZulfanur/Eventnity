import React from "react"

export default function CountDownCard(props) {
  return (
    <>
      <div className="lg:w-56 w-40 bg-white shadow-2xl text-center p-6 rounded-xl">
        <h2 className="font-black lg:text-7xl text-5xl font-serif mb-1">
          {props.number}
        </h2>
        <p className="text-xl font-serif font-semibold uppercase text-gray-500">
          {props.types}
        </p>
      </div>
    </>
  )
}
