import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';

export default ({ input, meta: { touched, error }, id, selectData, val, placeholder, customOnChange, startsWithFiltering }) =>
    <div className="input-error-wrapper">
        <div className={ classNames({'input-error-wrapper__input': touched && error}) }>
            <Select
                value={ val }
                placeholder={ placeholder }
                options={ selectData }
                id={ id }
                noOptionsMessage={ () => 'Совпадений не найдено' }
                onInputChange={ customOnChange }
                filterOption={(option, rawInput) => {
                    const words = rawInput.split(' ');
                    return words.reduce(
                        (acc, cur) => acc && option.label.toLowerCase()[startsWithFiltering ? 'startsWith' : 'includes'](cur.toLowerCase()),
                        true,
                    );
                }}
                onChange={({ value }) => {
                    input.onChange(value);
                }}
                maxMenuHeight={ 280 }
                styles={{
                    placeholder: provided => ({
                        ...provided,
                        color: '#fff',
                    }),
                    input: provided => ({
                        ...provided,
                        color: '#fff',
                        fontSize: '14px',
                    }),
                    control: provided => ({
                        ...provided,
                        backgroundColor: '#73737C',
                        fontSize: '14px',
                        border: 'none'
                    }),
                    menu: provided => ({
                        ...provided,
                        backgroundColor: '#73737C'
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused || state.isSelected ? 'rgba(255, 0, 19, .8)' : '#73737C',
                        color: '#fff',
                        fontSize: '14px',
                        transition: 'background-color .1s ease',
                        cursor: 'pointer',
                        ':hover': {
                            backgroundColor: 'rgba(255, 0, 19, .8)'
                        }
                    }),
                    noOptionsMessageCSS: provided => ({
                        ...provided,
                        fontSize: '13px',
                        color: '#fff'
                    }),
                    singleValue: provided => ({
                        ...provided,
                        color: '#fff'
                    }),
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: '#73737C',
                        primary: 'none',
                        neutral0: '#73737C'
                    },
                })}
            />
        </div>
        <div className="input-error-wrapper__error">
            <span>{ touched && error }</span>
        </div>
    </div>;

// (option, inputValue) => {
//     console.log(option);
//     console.log(inputValue)
//     return option.label.toLowerCase().startsWith(option.inputValue && option.inputValue.toLowerCase())
// }