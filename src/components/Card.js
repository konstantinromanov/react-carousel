import React from "react";

class Card extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <React.Fragment>        
          {data.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.src} alt="" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href="/">Read more</a>
              </div>
            </div>
          ))}        
      </React.Fragment>
    );
  }
}

export default Card;


