import React from "react";
import { nanoid } from "nanoid";
import { Div, Input } from "./Filter.styled";

const filterInputId = nanoid();

const Filter = ({filter, onChangeFilter}) => (
    <Div>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <Input type="text" id={filterInputId} value={filter} onChange={onChangeFilter}/>
    </Div>
)

export default Filter;