"use client";

import { Button } from "@/components/button";
import { useCommands } from "./commands";

export function CommandEditor() {
  const addCommand = useCommands((state: any) => state.addCommand);

  return (
    <section className="w-full">
      <Button onClick={addCommand}>Add Command</Button>
    </section>
  )
}
