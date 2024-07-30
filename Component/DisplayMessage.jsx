
export const DisplayMessage = (props)=> {
  console.log(props.info.text)
    return (
      <div>
        <h1>{props.info.text}</h1>
      </div>
    );
}

