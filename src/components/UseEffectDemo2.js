import React,{useEffect,useState} from 'react'
// เรื่อง useEffect Update and Init

// ต้องมองว่า Effect คือผลกระทบ
export const UseEffectDemo2 = () => {
    
    const [count, setcount] = useState(0)
    useEffect(() => {
        // ส่วนที่ต้องการให้ code run ทุกครั้ง

        document.title = "Current count:" + count
        return ()=>{
            // ตอนที่ component ถูกทำลาย
            document.title = "the component was just destroyed";
            console.log("Destroyed")
        }
       
    }, [count]) //ตรงส่วนทำ condition
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount( count+1)}>Click</button>
        </div>
    )
}
