import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import AppLink, { AppLinkVariant } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'AppLink',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkVariant.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkVariant.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkVariant.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
