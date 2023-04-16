import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut ducimus earum excepturi mollitia 
    perspiciatis quis veniam! Doloremque dolores eius, et id 
    maiores neque omnis provident`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut ducimus earum excepturi mollitia 
    perspiciatis quis veniam! Doloremque dolores eius, et id 
    maiores neque omnis provident`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
