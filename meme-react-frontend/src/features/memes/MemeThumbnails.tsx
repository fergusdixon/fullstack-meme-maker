import React from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {chooseMeme, selectMemes} from './memesSlice';
import {config} from "../../constants";
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import styles from './Memes.module.css';


export function MemeThumbnails() {
    const memes = useAppSelector(selectMemes);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.thumbnails}>
            <GridList
                cols={4.3}>
                {memes.map((meme, index) => (
                    <GridListTile
                        key={index}
                        onClick={() => dispatch(chooseMeme(index))}>
                        <img src={config.API_URL + meme.thumbnail_path} alt={meme.name}/>
                        <GridListTileBar
                            title={meme.name}
                            classes={{
                                title: styles.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
