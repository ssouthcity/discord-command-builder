import { create } from "zustand";

enum ApplicationCommandTypes {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3,
}

const newCommand = () => ({
  name: "my_command",
  type: ApplicationCommandTypes.CHAT_INPUT,
  description: "this is an example command",
  options: [],
});

export const useCommands = create((set) => ({
  commands: [],
  addCommand: () => set((state: any) => ({ commands: [...state.commands, newCommand()] })),
}));
