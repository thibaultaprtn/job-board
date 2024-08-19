const Job = (props) => {
  console.log(props.color);
  return (
    <div className={props.color}>
      <h1>{props.title}</h1>
      <p>
        {props.type} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
