import React from 'react';
import css from './Dropdown.css';

let PropTypes;
if (process.env.NODE_ENV !== 'production') {
    PropTypes = require('prop-types');
}

export default class Content extends React.PureComponent {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
    };

    get DOMNode() {
        return this.node;
    }

    render() {
        const { children, className = '', ...leftover } = this.props;

        return (
            <div
                {...leftover}
                ref={(node) => {
                    this.node = node;
                }}
                className={`ReactMinimalDropdown__Content ${css.content || ''} ${className}`}
            >
                <div className={css.inner}>{children}</div>
            </div>
        );
    }
}
