import { create } from "zustand";

export type ApplicationCommand = {
  name: string
  type: ApplicationCommandType
  description: string
}

export enum ApplicationCommandType {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3,
}

const newCommand: () => ApplicationCommand = () => ({
  name: "my_command",
  type: ApplicationCommandType.CHAT_INPUT,
  description: "this is an example command",
});

export type ApplicationCommandStore = {
  commands: ApplicationCommand[]
  addCommand: () => void
  renameCommand: (idx: number, name: string) => void
  changeCommandType: (idx: number, type: ApplicationCommandType) => void
  changeCommandDescription: (idx: number, description: string) => void
}

export const useCommandStore = create<ApplicationCommandStore>((set) => ({
  commands: [],
  addCommand: () => set((state) => ({ commands: [...state.commands, newCommand()] })),
  renameCommand: (idx, name) =>
    set((state) => ({
      commands: state.commands.map((cmd, i) =>
        i === idx ? { ...cmd, name } : cmd
      ),
    })),
  changeCommandType: (idx, type) =>
    set((state) => ({
      commands: state.commands.map((cmd, i) =>
        i === idx ? { ...cmd, type } : cmd
      ),
    })),
  changeCommandDescription: (idx, description) =>
    set((state) => ({
      commands: state.commands.map((cmd, i) =>
        i === idx ? { ...cmd, description } : cmd
      ),
    })),
}));
