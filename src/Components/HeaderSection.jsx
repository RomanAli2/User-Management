import '../App.css'
import { NavLink } from 'react-router-dom';
function HeaderSection(){
    return(
        <>
<header className='h-17 p-4 bg-[#3B82F6] text-md md:text-xl text-white '>
    <nav className='flex items-center justify-between'>
<div className='flex items-center font-bold gap-2'>
<h1>
<i class="fa-solid fa-user"></i>

</h1><h1 className=''>User Management</h1>
</div>
<div className='flex gap-7 items-center'>
<NavLink to='/' className={({isActive})=>isActive?"  font-bold text-white":" text-white/80"} ><i class="fa-solid fa-user"></i> Users</NavLink>
<NavLink to='/About' className={({isActive})=>isActive?"text-white font-bold":"text-white/80"} > <i class="fa-solid fa-circle-info"></i> About</NavLink>


</div>

    </nav>
</header>
        </>
    )
}


export default HeaderSection