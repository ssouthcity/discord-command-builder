"use client";

import { CommandEditor } from "./command-editor";
import { CommandsJSONPreview } from "./json-output";

export default function Home() {
  return (
    <main className="flex flex-auto flex-wrap">
      <div className="flex-1" style={{ minWidth: "60ch" }}>
        <CommandEditor />
      </div>
      <div className="flex-1" style={{ minWidth: "60ch" }}>
        <CommandsJSONPreview />
      </div>
    </main>
  );
}
