import React from 'react';
import { TileProps } from './Tile.types';
import classNames from 'classnames';
import './Tile.scss';

const Tile = ({ tileStyle='light', header, description, ...other }: TileProps) => {
    return (
        <a className={classNames(['tile', `tile--${tileStyle}`])} {...other}>
            <span className='tile--header'>{header}</span>
            <span className={classNames(['tile--description', `tile--description--${tileStyle}`])}>
                {description}
            </span>
        </a>
    )
}

export default Tile;