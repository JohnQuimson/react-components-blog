import './Card.css';

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="cont-img">
          <img src="https://dummyimage.com/600x400/000/fff" alt="img-600x400" />
        </div>
        <div className="cont-info">
          <h4>Titolo del Post</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sequi ducimus, nobis eligendi eaque, facere earum nihil
            reprehenderit accusamus incidunt animi fugit pariatur, corrupti quis
            doloribus doloremque quam optio quibusdam!
          </p>
          <button>leggi di più</button>
        </div>
      </div>
    </>
  );
};

export default Card;
