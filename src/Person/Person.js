import React from 'react';
import classes from './Person.css';
import styled from 'styled-components';


const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.handleClick}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;