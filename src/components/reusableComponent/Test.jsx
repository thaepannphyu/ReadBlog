import { useParams } from "react-router-dom"


const Test = () => {

    const id=useParams("blogId");
    console.log(id);
  return (
    <div>
      
    </div>
  )
}

export default Test
