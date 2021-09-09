export const Practice1 = () =>{
    const calcTptalFee = (num:number) => {
        const total = num * 1.1;
        console.log(total);
    }
    const onclick =()=>{calcTptalFee(1000)} 
    return(
        <div>
            <p>練習問題1</p>
            <button onClick={onclick}>ボタン</button>
        </div>

    )
}