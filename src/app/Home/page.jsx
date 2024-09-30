import getPost from "@/Components/homeApi";

// api calling
const Homepage = async () => {
  const postData = await getPost();
  return (
    <div>
      {postData.map((item) => (
        <div>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <h1>{item.body}</h1>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
