import { Code } from "@/components/code";
import { useCommandStore } from "./commands";

export function CommandsJSONPreview() {
  const command = useCommandStore((state) => state.command);

  return (
    <section className="w-full">
      <Code>
        {JSON.stringify(command, null, 4)}
      </Code>
    </section>
  )
}
