"use client";

import { Button } from "@/components/button";
import { useCommands } from "./commands";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Stack } from "@/components/stack";

export function CommandEditor() {
  const commands = useCommands((state: any) => state.commands);
  const addCommand = useCommands((state: any) => state.addCommand);

  return (
    <section className="w-full">
      <Stack size="large">
        {commands.map((command: any) => (
          <Stack key={new Date().getMilliseconds().toString()} size="small">
            <Input value={command.name} readOnly />
            <Select>
              <option>Chat</option>
              <option>User</option>
              <option>Message</option>
            </Select>
            <Input value={command.description} readOnly />
          </Stack>
        ))}
        <Button onClick={addCommand}>Add Command</Button>
      </Stack>
    </section>
  )
}
