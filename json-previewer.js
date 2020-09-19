import React from 'react';
import './jsonFormatter.css';

export default class JSONPreviewer extends React.Component {

    constructor( {
        url = '', 
        title = 'Title Goes Here...', 
        width = '540px', 
        height = '600px', 
        align = 'center', 
        wrap = false, 
        obj = false
    } ){
        super();
        this.jsonURL = url;
        this.jsonObj = obj;
        this.width = width;
        this.height = height;
        this.align = align;
        this.wrap = wrap;
        this.title = title;
        this.state = {jsonData: ''};
    }
    
    componentDidMount(){
        if( this.jsonURL ){
            fetch(this.jsonURL).then( res => res.json() ).then(data=>this.setState({jsonData: data}));
        }
    }

    syntaxHighlight(jsonData) {
        if (typeof jsonData != 'string') {
             jsonData = JSON.stringify(jsonData, undefined, 2);
        }
        jsonData = jsonData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return jsonData.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
    

    render() {
        let jsonData = this.state.jsonData;

        // Prioritize json obj over url if both are presented.
        if( this.jsonObj ){
            jsonData = this.jsonObj;
        }

        const styleAttr = { 
            style : {
                height:  this.height,
                width: this.width,
                margin: this.align === 'center' ? '0 auto': this.align === 'right' ? '0 0 0 auto':'0 auto 0 0'
            }
        };

        return (
            <div className={`box__json ${this.wrap ? 'wrap':''}`} {...styleAttr}>
                <div className="box__heading">{this.title}</div>
                {this.jsonURL && <div className="box__request">
                    <div className="box__request--type"><span>200</span></div>
                    <div className="box__request--url">{this.jsonURL}</div>
                </div>}
              <pre dangerouslySetInnerHTML={{ __html: this.syntaxHighlight(jsonData) }}></pre> 
            </div>
            )
    }
  }