import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import Button, { ButtonSize, ButtonVariant } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    variant: ButtonVariant.CLEAR,
    children: 'hello',
};

export const Outline = Template.bind({});
Outline.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'hello',
};

export const Background = Template.bind({});
Background.args = {
    variant: ButtonVariant.BACKGROUND,
    children: 'hello',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    children: 'hello',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    variant: ButtonVariant.CLEAR,
    children: 'hello',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'hello',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'hello',
    disabled: true,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    variant: ButtonVariant.BACKGROUND,
    children: 'hello',
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    children: 'hello',
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareLarge = Template.bind({});
SquareLarge.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
    children: '>',
};

export const SquareMedium = Template.bind({});
SquareMedium.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
    children: '>',
};

export const SquareSmall = Template.bind({});
SquareSmall.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
    children: '>',
};

export const SquareLargeDark = Template.bind({});
SquareLargeDark.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
    children: '>',
};
SquareLargeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareMediumDark = Template.bind({});
SquareMediumDark.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
    children: '>',
};
SquareMediumDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSmallDark = Template.bind({});
SquareSmallDark.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
    children: '>',
};
SquareSmallDark.decorators = [ThemeDecorator(Theme.DARK)];
