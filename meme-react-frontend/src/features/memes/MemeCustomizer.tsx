import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectChosenMeme, updateTextFieldValue} from "./memesSlice";
import {makeStyles, TextField} from "@material-ui/core";
import {createStyles, Theme} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '50%',
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export function MemeCustomizer() {
    const meme = useAppSelector(selectChosenMeme);
    const classes = useStyles();
    const dispatch = useAppDispatch();

    if (meme) {
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <h5>{meme.name}</h5>
                {meme.text_fields.map((textField, index) => (
                    <TextField
                        onChange={(e) =>
                            dispatch(updateTextFieldValue({textFieldIndex: index, value: e.target.value}))}
                        key={meme.uuid + textField.order}
                        defaultValue={textField.value}
                        label={textField.order}
                        variant="outlined"/>
                ))}
            </form>
        )
    }
    return (
        <div>
        </div>
    );
}
