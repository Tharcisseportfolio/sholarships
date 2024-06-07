
import scholar from '../../assets/scholar.svg'
import { exclamationIcon } from '../../fonts/FontAwesome'
import './Header.css'

const Header = () => {

  const tujenge = <a href='https://www.tujenge.org/scholars' target='_blank' rel='noopener noreferrer'>Tujenge Scholars Program</a>

  return (
    <div className='header section__padding' id="home">

      <div className='header-content'>

        <div className='header-content-container' >
          <div className='header-content-h'>
            <h1 className='gradient__text'>Finding the right school shouldn’t be hard. Our goal is to help you find the right school for you and point you to the right resources to be ready to apply for college scholarship in different universities/colleges. We have a list of colleges that are known to provide financial aid to international students and Burundians as there are some Burundian alumni at those schools and these schools are more likely to give you a chance if you show your potential</h1>

          </div>

          <p><span className='advice text-primary p-2 '>{exclamationIcon}</span>Don't let the opportuities get away from you and this is the beginning! All colleges provided here are provided by the trusted high education {tujenge} and they know which school is good for you based on you interest!</p>

          <div className='images'>
            <div className='header-image'>
              <img src={scholar} alt="scholar image" />

            </div>
            <div className='header-image'>
              <img src={scholar} alt="scholar image" />

            </div>
            <div className='header-image'>
              <img src={scholar} alt="scholar image" />

            </div>
          </div>

          <div className='header-content__input'>
            <input type='email' placeholder='Your email address' />
            <button>Subscribe</button>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Header