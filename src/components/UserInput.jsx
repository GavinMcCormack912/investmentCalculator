export default function UserInput({ labelName, changeResults, input }) {
    return (
        <p>
            <label htmlFor={labelName}>{labelName}</label>
            <input type="number" 
                    required 
                    id={labelName} 
                    value={input}
                    onChange={changeResults}>
            </input>
        </p>
    );  
}