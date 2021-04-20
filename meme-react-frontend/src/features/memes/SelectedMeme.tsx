import React from 'react';

import {useAppSelector} from '../../app/hooks';
import {selectChosenMeme} from './memesSlice';
import {config} from "../../constants";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'nowrap',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            overflow: 'scroll',
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: '#FFFFFFF',
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
        },
        memeContainer: {
              maxWidth: '50%',
              width: 'auto',
              height: 'auto',
              paddingLeft: '20px',
              paddingRight: '20px',
        }
    }),
);


export function SelectedMeme() {
    const meme = useAppSelector(selectChosenMeme);
    const classes = useStyles();

    if (meme) {
        return (
            <div>
                <img className={classes.memeContainer} src={config.API_URL + meme.high_res_path} alt={meme.name}/>
            </div>
        );
    }
    return (
        <div>

        </div>
    );
}
