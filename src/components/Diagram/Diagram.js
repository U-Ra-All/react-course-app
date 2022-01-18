import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={null}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
