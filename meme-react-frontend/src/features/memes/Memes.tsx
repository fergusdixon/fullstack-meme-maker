import React from 'react';

import {MemeThumbnails} from "./MemeThumbnails";
import {SelectedMeme} from "./SelectedMeme";
import styles from './Memes.module.css';
import {MemeCustomizer} from "./MemeCustomizer";

export function Memes() {
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
