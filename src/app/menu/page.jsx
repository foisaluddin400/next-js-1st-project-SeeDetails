import Link from "next/link";


const Menu = () => {
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
      
    return (
        <div>
            {
                data.map((item)=> 
                <div className="border border-yellow-500 border-spacing-4  m-8 p-8">
                    <h2>{item.id}</h2>
                    <h2>{item.title}</h2>
                    <Link href={`/menu/${item.name}`}><button className=" bg-yellow-700 text-white p-2 mt-3">View Details</button></Link>
                </div>
            )
            }
        </div>
    );
};

export default Menu;