export function TaskCard({id, title, description, done}){
    return(
        <div key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{done}</p>
          </div>
    );
}