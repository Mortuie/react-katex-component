import React, {Component} from 'react';
import katex from 'katex';
import styled, {css} from 'styled-components';

export default class KatexComponent extends Component {
    render() {
        try {
            var str = katex.renderToString(this.props.data);
            console.log(str);
        } catch (err) {
            console.log(err);
        }
        return <TexWrapper dangerouslySetInnerHTML={{__html: str}}></TexWrapper>;
    }
}

const Wrapper = styled.div`
    width: 300px;
    height: 300px;

`;

const TexWrapper = styled.span`
    width: 300px;
    height: 300px;
    overflow: auto;
    border: 1px solid black;
    padding: 10px;
`;
