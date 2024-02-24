import { Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Toolbar, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';


interface IHeaderComponent {
    options: string[] | null,
    onClick: (field: string, text: string) => void,
}

const fieldMap: { [x: string]: string } = {
    product: 'Названию',
    brand: 'Бренду',
    price: 'Цене',
};

const getTranslate = (name: string) => {
    if (name in fieldMap) {
        return fieldMap[name];
    }
    return name;
};

const Header = ({ options, onClick }: IHeaderComponent) => {
    const [field, setField] = useState('');
    const [textValue, setTextValue] = useState('');


    const handleChange = (event: SelectChangeEvent | ChangeEvent<{ name: string, value: string }>) => {
        if (event.target.name === 'select') {
            setField(event.target.value);
        }
        if (event.target.name === 'textField') {
            setTextValue(event.target.value);
        }
    };

    const handleClick = () => {
        onClick(field, textValue);
        setField('');
        setTextValue('');
    };

    return (
        <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Наше золотишко)
            </Typography>
            <InputLabel id='select-label' sx={{ marginRight: '10px' }}>Поиск по:</InputLabel>
            <Select
                sx={{ minWidth: 120, marginRight: '10px' }}
                value={field}
                onChange={handleChange}
                id='select-label'
                name='select'
            >
                <MenuItem defaultValue='' disabled>Поиск по:</MenuItem>
                {options && options.map((option, index) => (
                    <MenuItem key={index} value={option}>{getTranslate(option)}</MenuItem>
                ))}
            </Select>
            <TextField
                label='Введите текст'
                variant='outlined'
                value={textValue}
                name='textField'
                onChange={handleChange}
            />
            <Button onClick={handleClick}>Поиск</Button>
        </Toolbar>
    );
};

export default Header;
