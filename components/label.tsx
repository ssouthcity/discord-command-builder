export function Label(props: React.ComponentProps<"label">) {
  return (
    <label className="text-slate-300 font-bold">
      {props.children}
    </label>
  )
}
