"use client";

import { Button } from "@/components/button";
import { ApplicationCommandType, useCommandStore } from "./commands";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Stack } from "@/components/stack";
import { Label } from "@/components/label";

export function CommandEditor() {
  const commands = useCommandStore((state) => state.commands);
  const addCommand = useCommandStore((state) => state.addCommand);
  const renameCommand = useCommandStore((state) => state.renameCommand);
  const changeCommandType = useCommandStore((state) => state.changeCommandType);
  const changeCommandDescription = useCommandStore((state) => state.changeCommandDescription);

  return (
    <section className="w-full">
      <Stack size="large">
        {commands.map((command: any, i: number) => (
          <Stack key={i} size="small">
            <Label htmlFor="name">Name</Label>
            <Input name="name" value={command.name} onChange={(e) => renameCommand(i, e.currentTarget.value)} />
            <Label htmlFor="name">Type</Label>
            <Select value={command.type} onChange={(e) => changeCommandType(i, parseInt(e.currentTarget.value))}>
              <option value={ApplicationCommandType.CHAT_INPUT}>Chat</option>
              <option value={ApplicationCommandType.USER}>User</option>
              <option value={ApplicationCommandType.MESSAGE}>Message</option>
            </Select>
            <Label htmlFor="name">Description</Label>
            <Input value={command.description} onChange={(e) => changeCommandDescription(i, e.currentTarget.value)} />
          </Stack>
        ))}
        <Button onClick={addCommand}>Add Command</Button>
      </Stack>
    </section >
  )
}
