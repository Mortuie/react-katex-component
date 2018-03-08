# React-Katex-Component
This is a react component which can be used to render maths equations on the screen. It uses Khan Academy's `Katex` to generate the html.

## Installing
You can install it with npm:
```
npm install react-katex-component
```

When using within a react project you need to add the `Katex CSS file` within your index.html file. The required cdn tag is as follows: 
```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossorigin="anonymous">
```

## Usage
Once the package has been installed it can be used as follows:

```jsx
import React, {Component} from 'react';
import KatexComponent from 'react-katex-component';

export default class Test extends Component {

    render() {
        return <KatexComponent data={"YOUR KATEX STRING"} />;
    }
}