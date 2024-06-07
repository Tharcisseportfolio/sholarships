
import './Admission.css'

const Admission = () => {
  return (
    <div className='admission'>
      <div className='admission-info'>

        <div className='admission-info-header'>
          <h1>Quick & Best to get</h1>
          <h2>Admissions</h2>
        </div>

        <div className='admission-info-content'>
          <p>Admissions are open for the session {new Date().getFullYear()}. Apply now and get a chance to study in the best school in the U.S.</p>
        </div>

        <div className='admission-info-button'>
          <button>Create a profile</button>
          <button>Learn more</button>
        </div>

      </div>

    </div>
  )
}

export default Admission