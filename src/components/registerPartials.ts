import Handlebars from 'handlebars';
import { input } from './Input/input.tpl';
import { button } from './Button/button.tpl';
import { chatInput } from './Chat/ChatInput/chatInput.tpl';
import { chatItem } from './Chat/ChatItem/chatItem.tpl';
import { avatar } from './Avatar/avatar.tpl';
import { messageCard } from './Chat/MessageCard/messageCard.tpl';
import { profileInput } from './ProfileInput/profileInput.tpl';

Handlebars.registerPartial('input', input);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('chatInput', chatInput);
Handlebars.registerPartial('chatItem', chatItem);
Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('messageCard', messageCard);
Handlebars.registerPartial('profileInput', profileInput);
