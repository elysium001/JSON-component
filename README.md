# JSON Previewer React Component
This component will output JSON to the frontend with a simple syntax highlight style and works as follow:

## To Install
Copy this component folder into your React project and then use the component within your App.

## Example
1. First, import the JSONPreviewer component.
2. Use the component by passing in a url to a JSON or a JSON obj as well as a title and width (optional);

Use these params if needed:
```
        url = 'http://url-to-json.com/file.json', // add a json url
        title = 'Title Goes Here...', //default
        width = '540px', //any unit
        height = '600px', // any unit
        align = 'center', // left, center, right
        wrap = false, // wraps long strings only
        obj = false // pass in real object as in the example below.
```

```javascript
import React from 'react';
import JSONPreviewer from './components/json-previewer/json-previewer'; // 1. import new component
import './App.css';

const myJsonObj = {
  "glossary": {
      "title": "example glossary",
  "GlossDiv": {
          "title": "S",
    "GlossList": {
              "GlossEntry": {
                  "ID": "SGML",
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "GlossDef": {
                      "para": "A meta-markup language, used to create markup languages such as DocBook.",
          "GlossSeeAlso": ["GML", "XML"]
                  },
        "GlossSee": "markup"
              }
          }
      }
  }
};

function App() {
  return (
    <div className="App">

      <div style={{display: 'flex'}}>
        {/* Then use the JSONPreviewer component by passing in a json URL or obj */}
        <JSONPreviewer obj={myJsonObj} title='My Title Here!' width='30%'/>
        <JSONPreviewer url='http://localhost:3000/sample.json' title='My Title Here!' width='30%'/>
        <JSONPreviewer url='http://localhost:3000/sample.json' title='My Title Here!' width='30%'/>
      </div>
    </div>
  );
}

export default App;


```