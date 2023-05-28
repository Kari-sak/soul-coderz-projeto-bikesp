import './style.css'
import { CgAdd } from "react-icons/cg";
import { FaPen, FaRegTimesCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function Point(props) {
  return (
    <div className="point">
      <div className="address">
        <FaMapMarkerAlt size={20} />
        <p>{props.address}</p>
      </div>
      <div className='actions'>
        <div className="avaiableCount">
          <h5>Bikes disponiveis</h5>
          <p>Kids: {props.amountKids}</p>
          <p>Adulto: {props.amountAdult}</p>
        </div>
        <div className="Size">
          <div className='radios'>
            <h5>Tamanho</h5>
            <label htmlFor="kids">
              <input type="radio" name="type" value="kids" />
              Kids
            </label>
            <label htmlFor="adulto">
              <input type="radio" name="type" value="adulto" />
              Adulto
            </label>
          </div>
          <div className="button_bike_add">
            <button className='add_bike'>Adicionar bike
              <CgAdd size={20} className='button_icons' />
            </button>
          </div>
        </div>
        <div className='button_bike_edit'>
          <button className='edit_bike'>Editar
            <FaPen size={16} className='button_icons' />
          </button>
          <button className='remove_bike'>Remover
            <FaRegTimesCircle className='button_icons' size={18} />
          </button>
        </div>
        <div className="button_bike_remove">
        </div>
      </div>
    </div>
  )
}