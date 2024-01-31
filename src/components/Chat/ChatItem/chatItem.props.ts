import { DefaultProps } from '../../../core/Block/Block';

export type IChatItem = {
  chatName: string
  lastDate: string
  message: string
} & DefaultProps
