"use client";

import { Button } from "@/components/button";
import { ApplicationCommandOptionType, ApplicationCommandType, useCommandStore } from "./commands";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Stack } from "@/components/stack";
import { Label } from "@/components/label";
import { Divider } from "@/components/divider";
import { Embed } from "@/components/embed";

export function CommandEditor() {
  const {
    command,
    renameCommand,
    changeCommandType,
    changeCommandDescription,
    addOption,
    renameOption,
    changeOptionDescription,
    changeOptionType,
  } = useCommandStore();

  return (
    <section className="w-full">
      <Stack size="small">

        <Label htmlFor="name">Name</Label>
        <Input name="name" value={command.name} onChange={(e) => renameCommand(e.currentTarget.value)} />

        <Divider />

        <Label htmlFor="type">Type</Label>
        <Select name="type" value={command.type} onChange={(e) => changeCommandType(parseInt(e.currentTarget.value))}>
          <option value={ApplicationCommandType.CHAT_INPUT}>Chat</option>
          <option value={ApplicationCommandType.USER}>User</option>
          <option value={ApplicationCommandType.MESSAGE}>Message</option>
        </Select>

        <Divider />

        <Label htmlFor="description">Description</Label>
        <Input name="description" value={command.description} onChange={(e) => changeCommandDescription(e.currentTarget.value)} />

        <Divider />

        <Label>Options</Label>

        {command.options.map((option, i) => (
          <Embed key={i}>
            <Stack size="small">
              <Label htmlFor={`option_${i}_name`}>Name</Label>
              <Input name={`option_${i}_name`} value={option.name} onChange={(e) => renameOption(i, e.currentTarget.value)} />

              <Label htmlFor={`option_${i}_description`}>Description</Label>
              <Input name={`option_${i}_description`} value={option.description} onChange={(e) => changeOptionDescription(i, e.currentTarget.value)} />

              <Label htmlFor={`option_${i}_type`}>Type</Label>
              <Select name={`option_${i}_type`} value={option.type} onChange={(e) => changeOptionType(i, parseInt(e.currentTarget.value))}>
                <option value={ApplicationCommandOptionType.SUB_COMMAND}>Subcommand</option>
                <option value={ApplicationCommandOptionType.SUB_COMMAND_GROUP}>Subcommand Group</option>
                <option value={ApplicationCommandOptionType.STRING}>String</option>
                <option value={ApplicationCommandOptionType.INTEGER}>Integer</option>
                <option value={ApplicationCommandOptionType.BOOLEAN}>Boolean</option>
                <option value={ApplicationCommandOptionType.USER}>User</option>
                <option value={ApplicationCommandOptionType.CHANNEL}>Channel</option>
                <option value={ApplicationCommandOptionType.ROLE}>Role</option>
                <option value={ApplicationCommandOptionType.MENTIONABLE}>Mentionable</option>
                <option value={ApplicationCommandOptionType.NUMBER}>Number</option>
                <option value={ApplicationCommandOptionType.ATTACHMENT}>Attachment</option>

              </Select >

            </Stack >
          </Embed >
        ))
        }

        <Button onClick={addOption}>Add Option</Button>
      </Stack >
    </section >
  )
}
