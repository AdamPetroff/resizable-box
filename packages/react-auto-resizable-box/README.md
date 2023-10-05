# React Resizable Box

This is a simple React component that will resize it's own size dynamically based on it's content.

## Installation

```bash
npm install --save react-auto-resizable-box
# or with yarn
yarn add react-auto-resizable-box
```

## Example

![Example1](./example.gif)

You can see that the whole modal changes size dynamically when it's content changes.

Please note that the styling or any of the content you can see in the example is not included in this package.

Nor is the animation of the modal content sliding to the side. That is done with [framer-motion](https://www.framer.com/motion/).

## Usage

```jsx
import React from "react";
import ResizableBox from "react-auto-resizable-box";

const Component = () => (
  <ResizableBox className="bg-red-500">
    <span>Contents which change size</span>
  </ResizableBox>
);
```

## Todo

- better readme!
- tests
- storybook
- examples
- tabValue property is not well named
