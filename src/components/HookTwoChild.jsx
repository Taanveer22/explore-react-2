const HookTwoChild = (props) => {
  const person = props.person || {};
  const { name, city, salary, age, profession } = person;

  return (
    <div>
      <div className="bg-green-500 p-5 m-5 rounded-md ">
        <h3>{name}</h3>
        <p>City: {city}</p>
        <p>Salary: ${salary}</p>
        <p>Age: {age}</p>
        <p>Profession: {profession}</p>
      </div>
    </div>
  );
};

export default HookTwoChild;
