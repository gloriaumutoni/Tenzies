const Dice = (props) => {
    let styles = {
      backgroundColor:props.isHeld?"#59E391":'white',
    };
  
  return (
    <div className="px-6 py-4 rounded-md text-xl font-medium  mx-2 shadow-sm my-2" style={styles} onClick={props.holdDice}>
     <p>{props.value}</p> 
    </div>
  );
};

export default Dice;
