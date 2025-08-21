import { useState } from "react";
import HookTwoChild from "./HookTwoChild";

const HookTwo = () => {
  const arrayOfObjects = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      salary: 85000,
      age: 32,
      profession: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Doe",
      city: "London",
      salary: 72000,
      age: 28,
      profession: "Marketing Manager",
    },
    {
      id: 3,
      name: "Peter Smith",
      city: "Tokyo",
      salary: 95000,
      age: 35,
      profession: "Financial Analyst",
    },
    {
      id: 4,
      name: "Sarah Jones",
      city: "Sydney",
      salary: 68000,
      age: 26,
      profession: "Graphic Designer",
    },
    {
      id: 5,
      name: "Michael Brown",
      city: "Berlin",
      salary: 78000,
      age: 31,
      profession: "Data Scientist",
    },
    {
      id: 6,
      name: "Emily White",
      city: "Paris",
      salary: 65000,
      age: 29,
      profession: "UX Designer",
    },
    {
      id: 7,
      name: "David Green",
      city: "Dubai",
      salary: 120000,
      age: 38,
      profession: "Project Manager",
    },
    {
      id: 8,
      name: "Elizabeth Blue",
      city: "Toronto",
      salary: 75000,
      age: 33,
      profession: "HR Specialist",
    },
    {
      id: 9,
      name: "William Black",
      city: "San Francisco",
      salary: 110000,
      age: 36,
      profession: "Product Manager",
    },
    {
      id: 10,
      name: "Jennifer Pink",
      city: "Singapore",
      salary: 82000,
      age: 30,
      profession: "Business Analyst",
    },
  ];
  const [data] = useState(arrayOfObjects);

  // filter people above 80000 salary
  const filteredData = data.filter((person) => person.salary > 80000);

  return (
    <div>
      <h1 className="text-3xl text-blue-700 font-medium">
        Person with salary above $ 80,000
      </h1>
      <h2 className="text-xl text-blue-700 font-medium">
        Showing {filteredData.length} out of {data.length} person
      </h2>
      {filteredData &&
        filteredData.map((element, index) => (
          <HookTwoChild person={element} key={index}></HookTwoChild>
        ))}
    </div>
  );
};

export default HookTwo;
