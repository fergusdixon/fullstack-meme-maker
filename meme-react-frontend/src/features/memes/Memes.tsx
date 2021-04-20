import React from 'react';

import {MemeThumbnails} from "./MemeThumbnails";
import {SelectedMeme} from "./SelectedMeme";
import styles from './Memes.module.css';
import {MemeCustomizer} from "./MemeCustomizer";
import {useAppSelector} from "../../app/hooks";
import {selectMemeError, selectMemeStatus} from "./memesSlice";
import {Alert, AlertTitle} from '@material-ui/lab';
import {CircularProgress, makeStyles} from "@material-ui/core";
import {createStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '20%',
            padding: '10%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export function Memes() {
    const loadingState = useAppSelector(selectMemeStatus);
    const error = useAppSelector(selectMemeError);
    const classes = useStyles();

    if (loadingState === 'loading') {
        return (
            <CircularProgress className={classes.root}/>
        )
    } else if (loadingState === 'failed') {
        return (
            <div className={classes.root}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
            </div>
        )
    }
    return (
        <div>
            <div className={styles.row}>
                <MemeThumbnails/>
            </div>
            <div className={styles.row}>
                <SelectedMeme/>
                <MemeCustomizer/>
            </div>
        </div>
    );
}
