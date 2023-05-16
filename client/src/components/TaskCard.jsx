import {useNavigate} from 'react-router-dom';

export function TaskCard({id, title, description, done}){
    const navigate = useNavigate();
    return(
        <div style={{background: "#black"}} onClick={()=>{
            navigate(`/tasks/${id}`);
        }}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{done}</p>
          </div>
    );
}