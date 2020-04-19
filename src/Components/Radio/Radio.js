import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './Radio.scss';

export default function RadioButtonsGroup() {
    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup style={ {'flexDirection' : 'row'} } aria-label="type" name="type" value={value} onChange={handleChange}>
                <FormControlLabel value="film" control={<Radio />} label="Film" />
                <FormControlLabel value="dizi" control={<Radio />} label="Dizi" />
            </RadioGroup>
        </FormControl>
    );
}
