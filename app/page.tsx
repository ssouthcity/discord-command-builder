"use client";

import { CommandEditor } from "./command-editor";
import { CommandsJSONPreview } from "./json-output";

export default function Home() {
  return (
    <main className="flex flex-auto">
      <CommandEditor />
      <CommandsJSONPreview />
    </main>
  );
}
