#  ☂️ Umbrella-UI

Congrats! You just saved yourself hours of work by bootstrapping this library. This is mostly a personal project focusing on half-headless and half-designed components and other nice and friendly libraries.

> This setup is meant  for easy development with use of classNames to change styling (semi-headless). This library also contains other useful libraries such as: `react-hook-form`, `@headlessui/react`, `react-loading-skeleton`, `react-loader-spinner`, `recharts`.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

# Typescript Support
The library focuses on having TypeScript support and make use of well-defined properties.

# Installation
> NPM
```
npm install umbrella-ui --save
```
> Yarn
```
yarn add umbrella-ui
```

# Example Usage
## App Root
Import the library css file to the app root:
```js
import 'umbrella-ui/dist/tailwind.css';
```
## Component usage
Example of `<Card>` component.
```jsx
import { Card } from 'umbrella-ui';
const CustomHeader = () => {
    return (
        <div>Hi, I'm a card header prop.</div>
    )
}

const CustomFooter = () => {
    return (
        <div>Hi I'm a card footer prop.</div>
    )
}

const CustomCard = () => {
    return (
        <Card header={<CustomHeader />} footer={<CustomFooter />}>
            Hi I'm the content in the card
        </Card>
    )
}

export default CustomCard;
```
# Components
## Control
- [x] Button with variants
- [x] Card with children
- [x] Input
- [x] Toggle
## Layout
- [x] Flex container
- [x] Grid with GridElements
## Typography
- [x] Keyboard shortcut visual
## Loading/Placeholders
- [x] Example loaders such as DNA loader and other cool animations.
- [x] Progress Bar
- [x] Skeleton Loader

