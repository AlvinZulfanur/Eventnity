export default function Button({ children, ClassName }) {
  const addClassName = "addClassname" ? `${ClassName}` : ""
  return (
    <>
      <button
        className={`px-10 text-2xl bg-purple-500 py-4 text-white font-mono font-medium rounded-lg absolute hover:bg-purple-400 transition-all ${addClassName}`}
      >
        {children}
      </button>
    </>
  )
}
