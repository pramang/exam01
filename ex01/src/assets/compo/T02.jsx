import { useState } from "react";

const dataList = [
    {id:1,txt:'홍길동',addr:'서울',old:2},
    {id:2,txt:'유재석',addr:'서울',old:1},
    {id:3,txt:'강호동',addr:'서울',old:8},
    {id:4,txt:'이수근',addr:'서울',old:7},
    {id:5,txt:'은지원',addr:'서울',old:6},
]
const T02 = () => {
    const [data,setData] =useState(dataList)
    

    const onName = (id) =>{
        if(id === 1){
            setData([...data].sort((a,b) => a.txt>b.txt ? 1:-1))
        }else{
            setData([...data].sort((a,b) => a.old>b.old ? 1:-1))
        }
    }
    
    return (
        <div>
            <p>
                <button onClick={()=>onName(1)}>이름</button>
                <button onClick={()=>onName(2)}>나이</button>
            </p>
            <ul>
            {
                data.map(item=><li key={item.id} >{item.id}. / {item.txt} / {item.addr} / {item.old}</li>)
            }
            </ul>

        </div>
    );
};

export default T02;