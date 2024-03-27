"use client";

import { Button } from "@/components/button";
import { useCommands } from "./commands";
import { Input } from "@/components/input";

export function CommandEditor() {
  const commands = useCommands((state: any) => state.commands);
  const addCommand = useCommands((state: any) => state.addCommand);

  return (
    <section className="w-full">
      {commands.map((command: any) => (
        <Input value={command.name} />
      ))}
      <Button onClick={addCommand}>Add Command</Button>
    </section>
  )
}
