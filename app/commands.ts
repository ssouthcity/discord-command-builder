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
  command: ApplicationCommand
  renameCommand: (name: string) => void
  changeCommandType: (type: ApplicationCommandType) => void
  changeCommandDescription: (description: string) => void
}

export const useCommandStore = create<ApplicationCommandStore>((set) => ({
  command: newCommand(),
  commands: [],
  renameCommand: (name) => set((state) => ({ command: { ...state.command, name } })),
  changeCommandType: (type) => set((state) => ({ command: { ...state.command, type } })),
  changeCommandDescription: (description) => set((state) => ({ command: { ...state.command, description } })),
}));
