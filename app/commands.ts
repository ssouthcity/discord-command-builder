import { stringify } from "querystring";
import { create } from "zustand";

export type ApplicationCommand = {
  name: string
  type: ApplicationCommandType
  description: string
  options: ApplicationCommandOption[]
}

export type ApplicationCommandOption = {
  name: string
  description: string
  type: ApplicationCommandOptionType
}

export enum ApplicationCommandType {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3,
}

export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
  MENTIONABLE = 9,
  NUMBER = 10,
  ATTACHMENT = 11,
}

const newCommand: () => ApplicationCommand = () => ({
  name: "my_command",
  type: ApplicationCommandType.CHAT_INPUT,
  description: "this is an example command",
  options: [],
});

const newOption: () => ApplicationCommandOption = () => ({
  name: "my_option",
  description: "this is an example option",
  type: ApplicationCommandOptionType.STRING
});

export type ApplicationCommandStore = {
  command: ApplicationCommand
  renameCommand: (name: string) => void
  changeCommandType: (type: ApplicationCommandType) => void
  changeCommandDescription: (description: string) => void
  addOption: () => void
  renameOption: (i: number, name: string) => void
  changeOptionDescription: (i: number, description: string) => void
  changeOptionType: (i: number, type: ApplicationCommandOptionType) => void
}

export const useCommandStore = create<ApplicationCommandStore>((set) => ({
  command: newCommand(),
  renameCommand: (name) => set((state) => ({ command: { ...state.command, name } })),
  changeCommandType: (type) => set((state) => ({ command: { ...state.command, type } })),
  changeCommandDescription: (description) => set((state) => ({ command: { ...state.command, description } })),
  addOption: () => set((state) => ({ command: { ...state.command, options: [...state.command.options, newOption()] } })),
  renameOption: (i: number, name: string) => set((state) => ({ command: { ...state.command, options: state.command.options.map((cmd, idx) => i == idx ? { ...cmd, name } : cmd) } })),
  changeOptionDescription: (i: number, description: string) => set((state) => ({ command: { ...state.command, options: state.command.options.map((cmd, idx) => i == idx ? { ...cmd, description } : cmd) } })),
  changeOptionType: (i: number, type: ApplicationCommandOptionType) => set((state) => ({ command: { ...state.command, options: state.command.options.map((cmd, idx) => i == idx ? { ...cmd, type } : cmd) } })),
}));
