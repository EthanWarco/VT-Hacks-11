import './Category.css';

function Category(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <ol className="listpoint">
        <li>{props.info[0][0]} - {props.info[0][1]}</li>
        <li>{props.info[1][0]} - {props.info[1][1]}</li>
        <li>{props.info[2][0]} - {props.info[2][1]}</li>
        <li>{props.info[3][0]} - {props.info[3][1]}</li>
        <li>{props.info[4][0]} - {props.info[4][1]}</li>
      </ol>
    </div>
  );
}

export default Category;