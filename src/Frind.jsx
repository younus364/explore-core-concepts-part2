export default function Frind({f}){
  
    const {name, email} = f; 
     
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}