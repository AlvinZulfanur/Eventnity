export default function EventCards({
  date,
  time,
  eventTitle,
  eventDesc,
  image,
}) {
  return (
    <>
      <img
        src={image}
        alt="event-1"
        className="mb-3 hover:scale-95 transition-all"
      />
      <div className="flex items-center px-3 lg:px-0 gap-40 mb-3">
        <h2 className="font-serif text-xs font-medium text-gray-500">{date}</h2>
        <p className="font-serif text-xs font-medium text-gray-500">{time}</p>
      </div>
      <h2 className="font-serif text-xl px-3 lg:px-0 font-semibold text-gray-700">
        {eventTitle}
      </h2>
      <p className="font-serif text-xs px-3 lg:px-0 text-gray-500">
        {eventDesc}
      </p>
    </>
  )
}
