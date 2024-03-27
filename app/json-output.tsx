import { useCommands } from "./commands";

export function CommandsJSONPreview() {
  const commands = useCommands((state: any) => state.commands);

  return (
    <section className="w-full">
      <pre>
        <code>
          {JSON.stringify(commands, null, 4)}
        </code>
      </pre>
    </section>
  )
}
