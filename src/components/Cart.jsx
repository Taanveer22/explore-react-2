
const Cart = () => {
    const names = ['sakib', 'tamim', 'mushfiq', 'riyad', 'mash'];
    return (
      <div>
        <h3>array map method</h3>
        {names.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    );
};

export default Cart;
