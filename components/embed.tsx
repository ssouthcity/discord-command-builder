export function Embed(props: React.PropsWithChildren) {
  return (
    <article className="bg-zinc-800 p-4 rounded border-l-4 border-cyan-500">
      {props.children}
    </article>
  )
}
