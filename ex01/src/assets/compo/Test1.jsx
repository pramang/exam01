import { useState } from "react";

const Test1 = () => {
    const [color, setColor ] = useState('yellow')

    const changeInput = e=> {
        const {value} = e.target
        setColor(value)
    }
    return (
        <div>
            <div
            style={{width : 500, height: 100,background: 'tomato', margin : 'auto', lineHeight: '100px', textAlign : 'center', color : {color}}}>
                xxx
            </div>
            <select onChange={changeInput}>
                <option>색상</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="darkgreen">green</option>
                <option value="skyblue">skyblue</option>
            </select>
        </div>
    );
};

export default Test1;