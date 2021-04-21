import React from 'react';

import {MemeThumbnails} from "./MemeThumbnails";
import {SelectedMeme} from "./SelectedMeme";
import styles from './Memes.module.css';
import {MemeCustomizer} from "./MemeCustomizer";
import {useAppSelector} from "../../app/hooks";
import {selectMemeError, selectMemeStatus} from "./memesSlice";
import {Alert, AlertTitle} from '@material-ui/lab';
import {CircularProgress} from "@material-ui/core";

export function Memes() {
    const loadingState = useAppSelector(selectMemeStatus);
    const error = useAppSelector(selectMemeError);

    if (loadingState === 'loading') {
        return (
            <CircularProgress className={styles.main}/>
        )
    } else if (loadingState === 'failed') {
        return (
            <div className={styles.main}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
            </div>
        )
    }
    return (
        <div style={{padding: "60px"}}>
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
