export function Switch() {
    const [isOn, setIsOn] = React.useState(false);
    return ( 
        <>
        <p>{isOn ? "On" : "Off"}</p>
        <button onClick={()=>setIsOn(!isOn)}>Toggle</button>
        </>
    )
}