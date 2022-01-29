export const Select = ({data}) => {
    return(
        <>
        <select>
         {data.map(e=><option>{e.option}</option>)}
        </select>
        </>
    )
}