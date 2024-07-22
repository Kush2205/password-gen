import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length,setLength]= useState(8)
  const [isNumber,setIsNumber]=useState(false)
  const [isCharacters,setIsCharacter]=useState(false)
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordRef = useRef(null) 

const passwordGen = useCallback( () =>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz"
  if(isNumber) str+="1234567890"
  if(isCharacters) str+="!@#$%^&*()_-="

  for (let i = 0; i < length; i++) {
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
  }

 setPassword(pass)

}, [length,isNumber,isCharacters ])
useEffect(() =>{ passwordGen()},[length, isNumber, isCharacters, passwordGen])

const copyPassToClip = useCallback(() =>{ 
  passwordRef.current?.select()
  
  
  
  window.navigator.clipboard.writeText(password)

},[password])





return (
    <>
   <div className='w-fit  mx-auto py-5 shadow-md
   rounded-lg text-center px-4 my-8 text-black bg-gray-600'> 

   <div className='flex shadow justify-center rounded-lg overflow-hidden mb-4'>
    <input type='text' value={password} className='outline-none rounded-lg w-96 py-1 px-3'
    placeholder='Password' readOnly ref={passwordRef}/>
    
    <button onClick={copyPassToClip} className='bg-blue-600 text-white mx-3 rounded-xl px-4 py-2' >Copy</button> </div>
    
    <div className='flex text—sm  gap-x-2'>
    <div className='flex  gap-x-1' >
       <input onChange={(e) =>{setLength(e.target.value)}}  type="range" min={8} max={30} value={length} className='cursor:pointer' />
       <label className='text-white'>Length:{length}</label></div>
     <div className='flex gap-x-2 '>
      
      <input  type="checkbox" onChange={() => {setIsNumber((prev) => !prev)}}/><label className='text-white'>Numbers</label>
      <input onChange={() =>  {setIsCharacter((prev) => !prev)}} type="checkbox"/><label className='text-white'>Special Characters</label>
      
     
     </div>
         
    </div>
   
    </div>
    </>
  )

}
export default App
