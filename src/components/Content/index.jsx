import React from 'react'
import './styles.scss';
import Avt1 from "../../assets/_images/Profile_pics/Carlo_Rizzi.jpg"
import Avt2 from "../../assets/_images/Profile_pics/Carmelia_Corleone.jpg"
import Avt3 from "../../assets/_images/Profile_pics/kay_adams.jpg"
import Avt4 from "../../assets/_images/Profile_pics/Luci_Mancini.jpg"
import Avt5 from "../../assets/_images/Profile_pics/tom_hagen.jpg"
import Avt6 from "../../assets/_images/Profile_pics/Vito_Corleone.jpg"


const AvtConst = [Avt1, Avt2, Avt3, Avt4, Avt5, Avt6]

const Content = ({ employee, currentIdx, onChangePopularity }) => {
  if (!employee || !employee?.name)  {
    return (
      <div>No Content</div>
    )
  }
  

  const urlAvatar = `/${employee.image.replaceAll(' ', '_')}`;

  return (
    <div className='container'>
      <div className='employee'>
        <div className='employee__avatar'>
          <img src={AvtConst[currentIdx]} alt="avatar" />
        </div>
        <div className='employee__info'>
        <div className='employee__info__name'>{employee.name}</div>
        <div className='employee__info__popularity'>
          <label>Popularity</label>
          <input
            type='range'
            onChange={onChangePopularity}
            min={1}
            max={10}
            step={1}
            value={employee.popularity}
            className='custom-slider'>
          </input>
        </div>
        <div className='employee__info__biography'>
          <h3>Biography</h3>
          <p>{employee.biography}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Content