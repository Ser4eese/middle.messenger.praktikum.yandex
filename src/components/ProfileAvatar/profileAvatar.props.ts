/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { DefaultProps } from '../../core/Block/Block';

export enum ProfileAvatarSizes {
    MEDIUM = 'medium',
    SMALL = 'small',
    BIG = 'big'
}

export interface IProfileAvatarProps extends DefaultProps{
    url?: string,
    variant?: ProfileAvatarSizes
}
