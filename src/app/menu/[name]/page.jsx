
const Details = ({params}) => { 
    const {title, id} = data.find (datas => datas.name == params.name)


    
    return (
        <div>
            <h1>{title}</h1>
            <h1>{id}</h1>
        </div>
    );
};

const data = [
    {
      "id": 1,
      "name": "Alice",
      "title": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Bob",
      "title": "Product Manager"
    },
    {
      "id": 3,
      "name": "Charlie",
      "title": "UI/UX Designer"
    },
    {
      "id": 4,
      "name": "David",
      "title": "DevOps Engineer"
    },
    {
      "id": 5,
      "name": "Eve",
      "title": "Data Scientist"
    },
    {
      "id": 6,
      "name": "Frank",
      "title": "QA Engineer"
    },
    {
      "id": 7,
      "name": "Grace",
      "title": "Marketing Specialist"
    },
    {
      "id": 8,
      "name": "Hank",
      "title": "Business Analyst"
    },
    {
      "id": 9,
      "name": "Ivy",
      "title": "Sales Executive"
    },
    {
      "id": 10,
      "name": "Jack",
      "title": "Frontend Developer"
    }
  ]
export default Details;