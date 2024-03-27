"use client";

import { useCommands } from "./commands";

export function CommandEditor() {
  const addCommand = useCommands((state: any) => state.addCommand);

  return (
    <section className="w-full">
      <button onClick={addCommand}>Add Command</button>
    </section>
  )
}
