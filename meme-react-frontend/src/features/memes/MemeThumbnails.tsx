import React from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {chooseMeme, selectMemes} from './memesSlice';
import {config} from "../../constants";
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into its own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: '#000000',
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%)',
        },
    }),
);

export function MemeThumbnails() {
    const memes = useAppSelector(selectMemes);
    const classes = useStyles();
    const dispatch = useAppDispatch();


    return (
        <div className={classes.root}>
            <GridList
                className={classes.gridList}
                cols={3.25}>
                {memes.map((meme, index) => (
                    <GridListTile
                        key={index}
                        onClick={() => dispatch(chooseMeme(index))}>
                        <img src={config.API_URL + meme.thumbnail_path} alt={meme.name}/>
                        <GridListTileBar
                            title={meme.name}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
