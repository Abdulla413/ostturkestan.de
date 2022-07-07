import {useState, useEffect, useRef} from "react"
import {submitComment}from "../services";





function CommentsForm({slug}) {
  const [error, setError]=useState(false)
  const [localStorage, setLocalStorage]=useState(null)
  const [showSuccessMessage, setShowSuccessMessage]=useState(false)
  const commentEl=useRef()
  const nameEl=useRef()
  const emailEl=useRef()
  const storeDataEl=useRef()

useEffect(()=>{
  nameEl.current.value=window.localStorage.getItem("name")
  emailEl.current.value=window.localStorage.getItem("email")



},[])



const handleSubmit = ()=>{
  setError(false)
  const {value:comment }=commentEl.current;
  const {value:name }=nameEl.current;
  const {value:email}=emailEl.current;
  const {checked:storeData}=storeDataEl.current;

  if(!comment || !name || !email){
    setError(true)
    return;
  }

  const commentObj= {
    name, email, comment, slug
  }

  if(storeData){
    window.localStorage.setItem("name", name , "email")
    window.localStorage.setItem("email", email)
  } else {
    window.localStorage.removeItem("name", name , "email")
    window.localStorage.removeItem("email", email)
  }

  submitComment(commentObj).then((res)=>{
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000);
  })

}

  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-6">
      Kommentarformular
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
        ref={commentEl} 
        className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200"
        placeholder="Kommentar"
        name="comment"
        /> 

       

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
        <input type="text" 
        ref={nameEl}
        className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200"
        placeholder="Name"
        name="name"

        />
        <input type="text" 
        ref={emailEl}
        className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200"
        placeholder="Email"
        name="email"

        />

      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"/>
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">
            Meinen Namen und E-mail in diesem Browser speichern, bis ich wieder kommentiere.</label>
        </div>
        
      </div>
      {error && <p className="text-xs text-red-500"> Alle Felder sind erforderlich. </p>}

      <button className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" type="button" onClick={handleSubmit}>
        Senden
      </button>
      {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Kommentar zur Überprüfung eingereicht.</span>}
    </div>
  )
}

export default CommentsForm