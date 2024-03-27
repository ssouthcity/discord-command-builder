import { Code } from "@/components/code";
import { useCommandStore } from "./commands";

export function CommandsJSONPreview() {
  const commands = useCommandStore((state: any) => state.commands);

  return (
    <section className="w-full">
      <Code>
        {JSON.stringify(commands, null, 4)}
      </Code>
    </section>
  )
}
