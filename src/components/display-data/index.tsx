interface DisplayDataProps {
    users:any[]
}
const DisplayData = (props:DisplayDataProps) => {
    return (
        <div className="card">
            <div className="card-body">
            {JSON.stringify(props.users, undefined, 2)}
            </div>
        </div>
        
    )
}

export default DisplayData
