import React, {useState, useEffect} from "react"
import moment from "moment"
import parse from "html-react-parser"
import { getComments } from "../services"


function Comments({slug}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {

      setComments(result)
      
      
      console.log(result)
    });
  }, []);

  return (
  
 <div>{ comments.length > 0 && (<div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
       <h3 className="text-xl mb-8 font-semibold border-b pb-4">
         {comments.length}
         {" "}
         Kommentare
       </h3>
       {comments.map((comment)=>(
 <div key={comment.createdAt} className="border-b pb-2 border-gray-100 mb-4 pb-4">
   <p className="mb-4">
     <span className="font-semibold">{comment.name}</span>
     {"  "}
     on 
     {" "}
     {moment(comment.createdAt).format("DD MM YYYY")}
   </p>
    <p className="whitespace-pre-line text-gray-600 w-full">
     {parse(comment.comment)}

    </p>
 </div>

       ))}
     </div>)}
     
     </div>  
  )
}

export default Comments