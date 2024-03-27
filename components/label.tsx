export function Label(props: React.ComponentProps<"label">) {
  return (
    <label className="text-zinc-300 font-bold">
      {props.children}
    </label>
  )
}
