import "./courseCard.css";
import certificate from "../../Assets/Icons/certificate.png";

interface Event {
  certificate: boolean;
  endTime: String;
  startTime: String;
  title: String;
}

const TableView: React.FC<{ details: Event }> = ({ details }) => {
  return (
    <div className="table-view-second">
      <div className="table-view">
        <div className="item item-text ">
          <i className="bi bi-calendar blue iconSpacer" />

          <p className="small dark w-normal">04 de Fevereiro</p>
        </div>
        <div className="item item-text ">
          <p className="small w-heavier dark">18:30 - 19:30</p>
        </div>
      </div>
      <div className="card-details">
        <p className="medium w-bold dark">PARTE 1</p>

        <div className="time-wrapper">
          <img className="certificate-icon" src={certificate} />
          <p className="medium dark">3h</p>
        </div>
      </div>
    </div>
  );
};
export default TableView;
