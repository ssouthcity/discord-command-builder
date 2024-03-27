"use client";

import { Button } from "@/components/button";
import { ApplicationCommandType, useCommandStore } from "./commands";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Stack } from "@/components/stack";
import { Label } from "@/components/label";
import { Divider } from "@/components/divider";

export function CommandEditor() {
  const command = useCommandStore((state) => state.command);
  const renameCommand = useCommandStore((state) => state.renameCommand);
  const changeCommandType = useCommandStore((state) => state.changeCommandType);
  const changeCommandDescription = useCommandStore((state) => state.changeCommandDescription);

  return (
    <section className="w-full">
      <Stack size="small">
        <Label htmlFor="name">Name</Label>
        <Input name="name" value={command.name} onChange={(e) => renameCommand(e.currentTarget.value)} />
        <Divider />
        <Label htmlFor="name">Type</Label>
        <Select value={command.type} onChange={(e) => changeCommandType(parseInt(e.currentTarget.value))}>
          <option value={ApplicationCommandType.CHAT_INPUT}>Chat</option>
          <option value={ApplicationCommandType.USER}>User</option>
          <option value={ApplicationCommandType.MESSAGE}>Message</option>
        </Select>
        <Divider />
        <Label htmlFor="name">Description</Label>
        <Input value={command.description} onChange={(e) => changeCommandDescription(e.currentTarget.value)} />
        {/*<Button onClick={addCommand}>Add Command</Button>*/}
      </Stack>
    </section >
  )
}
