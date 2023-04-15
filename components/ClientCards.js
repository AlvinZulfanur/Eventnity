export default function ClientCards({ image }) {
  return (
    <>
      <div
        className={`w-32 lg:w-60 bg-white lg:rounded-3xl rounded-lg shadow-2xl py-11`}
      >
        <img
          src={image}
          alt="logo universal"
          className="mx-auto px-6 lg:px-0"
        />
      </div>
    </>
  )
}
