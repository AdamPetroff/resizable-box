# React Resizable Box

This is a React component that will resize it's own size dynamically based on it's content. There is also an option to animate the change of the content itself.

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

## Usage

This is the simplest usage of the component:

```jsx
import React from "react";
import ResizableBox from "react-auto-resizable-box";

const Component = () => (
  <ResizableBox className="bg-red-500">
    <span>Contents which changes size</span>
  </ResizableBox>
);
```

This is using more of the available options:

```jsx
import React from "react";
import ResizableBox from "react-auto-resizable-box";

const Component = () => {
  const [boxSwitch, setBoxSwitch] = useState(true);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setBoxSwitch(true);
          }}
        >
          Make bigger
        </button>
        <button
          onClick={() => {
            setBoxSwitch(false);
          }}
        >
          Make smaller
        </button>
      </div>
      <div className="bg-slate-200">
        <ResizableBox
          duration={1}
          contentId={boxSwitch ? "big" : "small"}
          animation="crossFade"
          className="mb-4"
        >
          {boxSwitch ? <BigBox /> : <SmallBox />}
        </ResizableBox>
      </div>
    </div>
  );
};
```

## Todo

- better readme
- tests
- storybook
- more examples
- It could be abstracted better
