import React, { useState } from 'react';

const initList = [
    {
        name: "나는 권순",
        age: 23
    },
    {
        name: "나는 은수",
        age: 100
    },
    {
        name: "나는 류지훈",
        age: 600
    }
]

const Main = () => {
    const [count, setCount] = useState(1);
    const [members, setMemebers] = useState(initList);
    const [form, setForm] = useState({
        formName: "",
        formAge: ""
    });


    const {formName, formAge} = form;


    const memberComp = members.map((item, idx) => (
        <div key={idx}>
            <p>이름 : {item.name}</p>
            <p>나이 : {item.age}</p>
        </div>
    ));

    const inputAction = (element) => {
        const val = element.value;
        const nameeee = element.name;

        setForm({...form, [nameeee]: val});
    }


    const btnAction = (num, element) => {
        setCount(count + num);
    }

    return (
        <div id='main'>
            {memberComp}
            <div>
                <input name='formName' onChange={(element) => inputAction(element.target)} value={formName}/>
                <input name='formAge' onChange={(element) => inputAction(element.target)} value={formAge}/>
            </div>
        </div>
    );
};

export default Main;