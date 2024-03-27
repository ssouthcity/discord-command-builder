
export function Button(props: React.ComponentProps<"button">) {
  return (
    <button {...props} className="bg-indigo-500 text-slate-100 px-4 py-1 rounded hover:bg-indigo-600 transition-all duration-200">
      {props.children}
    </button>
  )
}
