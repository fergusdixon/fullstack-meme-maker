import React from 'react';

import {useAppSelector} from '../../app/hooks';
import {selectChosenMeme} from './memesSlice';
import {config} from "../../constants";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        memeContainer: {
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            paddingLeft: '20px',
            paddingRight: '20px',
        },
        outerWrapper: {
            position: "relative",
            width: "50%"
        },
        shadowedText: {
            position: "absolute",
            fontWeight: "bold",
            textShadow: "2px 2px 3px black",
            color: 'white',
            textTransform: 'uppercase',
            wordWrap: "normal",
        },
        normalText: {
            position: "absolute",
            fontWeight: "normal",
            wordWrap: "normal",
        }
    }),
);


export function SelectedMeme() {
    const meme = useAppSelector(selectChosenMeme);
    const classes = useStyles();

    if (meme) {
        return (
            <div className={classes.outerWrapper}>
                <img className={classes.memeContainer} src={config.API_URL + meme.high_res_path} alt={meme.name}/>
                {meme.text_fields.map((textField) => (
                    <div key={textField.order + meme.uuid}
                         className={textField.text_style === "shadowed" ? classes.shadowedText : classes.normalText}
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
