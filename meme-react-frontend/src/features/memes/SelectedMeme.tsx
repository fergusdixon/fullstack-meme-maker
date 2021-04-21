import React from 'react';

import {useAppSelector} from '../../app/hooks';
import {selectChosenMeme} from './memesSlice';
import {config} from "../../constants";
import styles from './Memes.module.css';
import Image from 'material-ui-image';

export function SelectedMeme() {
    const meme = useAppSelector(selectChosenMeme);

    if (meme) {
        return (
            <div className={styles.outerwrapper}>
                <Image src={config.API_URL + meme.high_res_path} cover={true} imageStyle={{height: "auto"}}/>
                {meme.text_fields.map((textField) => (
                    <div key={textField.order + meme.uuid}
                         className={textField.text_style === "shadowed" ? styles.shadowedtext : styles.normaltext}
                         style={
                             {
                                 left: `${(textField.distance_to_left) * 100}%`,
                                 top: `${(1-textField.distance_to_bottom) * 100}%`,
                                 transform: `rotate(${360 * textField.rotation}deg)`,
                                 maxWidth: `${textField.width * 100}%`,
                                 maxHeight: `${textField.width * 100}%`
                             }
                         }>
                        {textField.value}
                    </div>
                ))}
            </div>

        );
    }
    return (
        <div>
        </div>
    );
}
