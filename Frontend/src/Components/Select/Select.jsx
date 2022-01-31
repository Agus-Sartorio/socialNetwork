export const Select = ({data}) => {
    return(
        <>
        <select>
         {data.map(e=><option key={e.option}>{e.option}</option>)}
        </select>
        </>
    )
}