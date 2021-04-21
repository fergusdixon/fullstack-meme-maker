import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectChosenMeme, updateTextFieldValue} from "./memesSlice";
import {TextField} from "@material-ui/core";
import styles from './Memes.module.css'

export function MemeCustomizer() {
    const meme = useAppSelector(selectChosenMeme);
    const dispatch = useAppDispatch();

    if (meme) {
        return (
            <form className={styles.form} noValidate autoComplete="off">
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
