import { Code } from "@/components/code";
import { useCommands } from "./commands";

export function CommandsJSONPreview() {
  const commands = useCommands((state: any) => state.commands);

  return (
    <section className="w-full">
      <Code>
        {JSON.stringify(commands, null, 4)}
      </Code>
    </section>
  )
}
