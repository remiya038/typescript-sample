export const Practice3 = () =>{
    const calcTptalFee = (num) => {
        const total = num * 1.1;
        console.log(total);
    }
    const onclick =()=>{calcTptalFee(1000)} 
    return(
        <div>
            <p>練習問題3</p>
            <button onClick={onclick}>ボタン</button>
        </div>

    )
}