import { useState } from "react"

export function Code(props: React.PropsWithChildren) {
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = () => {
    if (!props.children)
      return

    navigator.clipboard.writeText(props.children?.toString())

    setCopyStatus("copied!");
    setTimeout(() => setCopyStatus(""), 500);
  }

  return (
    <pre className="bg-zinc-800 text-zinc-300 p-8 rounded overflow-hidden relative">
      <button onClick={copyToClipboard} className="absolute top-4 right-4">
        {copyStatus} 📋
      </button>
      <code>
        {props.children}
      </code>
    </pre>
  )
}
