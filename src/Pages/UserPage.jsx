
import '../App.css'
import { useState,useEffect } from 'react'
function UsersPage(){
    const [UserName,setUSerName]=useState("")
    const [name,setName]=useState("")
const [ShowUserAdd,SetShowUserAdd]=useState(false)
    const [email,setemail]=useState("")

    const [title,SetTitle]=useState("")

    const [Gender,setGender]=useState("")

  const [card,setCard]=useState([])
const [visible,setVisible]=useState(15)

function APiFetch(){
    fetch('https://my-backend-jade-phi.vercel.app/')
    
    .then((res)=>res.json())
    .then((res)=>{
        setCard(res.reverse())
   console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}
 function deleteUser(id){
const pass=prompt()
if(pass==='123'
){
  fetch(`https://my-backend-jade-phi.vercel.app/delete/${id}`,{
        method:"delete",
        
})
.then(()=>{
  APiFetch()
})
}
}

useEffect(()=>{
  APiFetch()
},[]);

  function AddUser(){
     if(name&&title&&Gender&&email!==''){
      fetch('https://my-backend-jade-phi.vercel.app/Post',{
        method:"Post",
        headers:{
            'content-type':"application/x-www-form-urlencoded"
        },
        body:new URLSearchParams({
            Name:name,
            email:email,
            Title:title,
            gender:Gender
        })
      } 
    ).then(()=>
         APiFetch()
    )
  }
    
    else{
      alert("All fields are required")
      return
    }
 
    ;
  setGender("")
  setName("")
  setemail("")
  SetTitle("")
    SetShowUserAdd(false)

  }


    return(
        <>
            <main className='min-h-screen w-full'><br/>
<div className='flex flex-wrap justify-center m-6 gap-10'>
<div className='h-20 w-full p-2 bg-gray-100 justify-center text-center rounded-2xl md:w-40 '>
<h1 ><span className='text-blue-500'><i class="fa-solid fa-users" ></i></span> Total Users</h1>
<h2 className='text-2xl font-bold'>{card.length}</h2>
</div>


<div className='h-20 w-full p-2 bg-gray-100 justify-center text-center rounded-2xl md:w-40 '>
<h1 ><span className='text-green-500'><i class="fa-solid fa-users" ></i></span> Active Users</h1>
<h2 className='text-2xl font-bold'>14</h2>
</div>

<div className='h-20 w-full p-2 bg-gray-100 justify-center text-center rounded-2xl md:w-40 '>
<h1 ><span className='text-yellow-500'><i class="fa-solid fa-users" ></i></span> Pending Invites</h1>
<h2 className='text-2xl font-bold'>{card.length-400}</h2>
</div>

<div className='h-20 w-full p-2 bg-gray-100 justify-center text-center rounded-2xl md:w-40 '>
<h1 ><span className='text-red-500'><i class="fa-solid fa-users" ></i></span> Deactivate user</h1>
<h2 className='text-2xl font-bold'>204</h2>
</div>

<div className='h-20 w-full p-2 bg-gray-100 justify-center text-center rounded-2xl md:w-40 '>
<h1 ><span className='text-red-500'><i class="fa-solid fa-users" ></i></span> Offline User</h1>
<h2 className='text-2xl font-bold'>50</h2>
</div>

</div>
            <br/>
        
    
  <div className='flex items-center justify-center m-5 gap-3'>

    <div>
    <input type='text' onChange={(e)=>setUSerName(e.target.value)} className=' outline-2 focus:outline-3 p-2 w-70 xs:w-80 sm:w-100 md:w-160 lg:w-180 py-3 rounded-sm outline-black focus:outline-blue-500 ' placeholder='Enter Name' value={UserName}/>
</div>
<div>

    <button onClick={()=>{SetShowUserAdd(true)}} className='bg-[#3B82F6] hover:bg-blue-600 cursor-pointer text-white md:text-lg text-sm px-3 py-2 rounded-md'>Add User</button>
</div>
</div><br/>
<h1 className='p-3 text-2xl'><strong>Total Users : </strong>{card.length}</h1>
    
<br/>

<div className='grid sm:grid-cols-2 justify-center m-4 md:grid-cols-3 gap-6'>

    {card.slice(0,visible).filter((item) =>
  UserName === "" 
    ? true 
    : item.Title.toLowerCase().includes(UserName.toLowerCase())
).map((item) => (
      <div key={item.id} className='border border-gray-500 rounded-lg p-4'>
      <h1 className='text-lg'><strong>Name : </strong> {item.Name}</h1>
        <h3 className='text-lg'><strong>Job</strong> : {item.Title}</h3>
        <p><strong>Email</strong> : {item.email}</p>
        <p><strong>Gender</strong> : {item.gender}</p><br/>
        <button className='border border-red-300 cursor-pointer bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md' onClick={() => deleteUser(item.id)}>
  Delete
</button>
      </div>
    ))}<br/><br/>
<button  className={`hover:text-blue-500 cursor-pointer text-lg ${UserName===""?"block":"hidden"} `} onClick={()=>setVisible(visible+18)}>Show More <i class="fa-solid fa-right-long"></i></button>
</div>


<div className={` flex items-center min-h-screen justify-center inset-0  z-50 fixed bg-black/30  ${ShowUserAdd?"block":"hidden"} `}>

  <div className="rounded-2xl bg-white/70 backdrop-blur-2xl shadow-xl flex flex-col items-center gap-6 p-8 w-96">

    <div>
      <h1 className="text-2xl font-bold text-gray-800">Enter User</h1>
    </div>

    <div className="flex flex-col gap-5 w-full">

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type='text'
        className="px-4 py-3 rounded-lg border outline-black border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
        placeholder="Job title"
        type='text'
        className="px-4 py-3 rounded-lg border outline-black border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        value={email}
        type='email'
        onChange={(e) => setemail(e.target.value)}
        placeholder="Email"
        className="px-4 py-3 rounded-lg border outline-black border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        value={Gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
        type='text'
        className="px-4 py-3 rounded-lg border border-black outline-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button onClick={AddUser} className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold">
        Submit
      </button>
<button onClick={()=>{SetShowUserAdd(false)}} className="bg-red-500 hover:bg-red-600 transition text-white   font-semibold">
      Close
      </button>
    </div>

  </div>
</div>  </main>
        </>
    )
}
export default UsersPage