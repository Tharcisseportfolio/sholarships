import './InfoCards.css';

const InfoCards = () => {
    const infoData = [
      {
        title: "Unique Search",
        content: "Just like you. We give you all of the data, reviews, and insights in one place to make your search as easy as possible.We know that findind a school is a big decision, and we're here to help you every step of the way."
      },
      {
        title: "Best analyzed",
        content: "We analyze the data from school to school and provide ones that can help you easily achieve your academic goals."
      },
      {
        title: "Review Based",
        content: "Our user reviews let you hear directly from families and students to give you an honest and holistic view."
      },
      {
        title: "Personalization",
        content: "We personalize your search based on what's most important to you, major, location, and more. We're here to help you find your perfect fit."
      }
    ];
  
    return (
      <div className='info-cards'>
        {infoData.map((info, index) => (
          <div className='info-card' key={index}>
            <h2>{info.title}</h2>
            <p>{info.content}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default InfoCards;