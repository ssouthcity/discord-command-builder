"use client";

import { CommandEditor } from "./command-editor";
import { CommandsJSONPreview } from "./json-output";

export default function Home() {
  return (
    <main className="flex flex-auto flex-wrap justify-around gap-8">
      <div className="w-full" style={{ maxWidth: "60ch" }}>
        <CommandEditor />
      </div>
      <div className="w-full" style={{ maxWidth: "60ch" }}>
        <CommandsJSONPreview />
      </div>
    </main>
  );
}
