export function Article (props){
    return(
        <div>
    <h1>Приветствую, {props.user}</h1>
    <p>Меня зовут {props.name}</p>
        </div>
    );
}