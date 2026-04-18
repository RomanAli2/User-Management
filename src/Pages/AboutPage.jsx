
function AboutPage(){
  
    return(
        <>

    <div className="bg-slate-100 p-6 min-h-screen">
      
    

      {/* 2. MAIN ABOUT SECTION (Bara Safed Card) */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Project</h2>
        
        {/* Short Description */}
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
         This is a full-stack user management application designed to help administrators 
          organize and monitor their team members. Our goal was to create a simple yet 
          effective tool to track user status and manage professional profiles in one place.
        
        </p>

        {/* 3. KEY FEATURES (Simple List) */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Our Features:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
            <li>User Tracking: Active vs Offline users dekhein.</li>
            <li>Role Management: Users ke jobs manage karein.</li>
            <li>Easy Actions: Delete/Deactivate users directly.</li>
          </ul>
        </div>

        {/* 4. TECH STACK (Tags style) */}
        <div className="mb-10 p-5 bg-slate-50 rounded border">
          <h3 className="text-lg font-semibold mb-3">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Express</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
          </div>
        </div>

        {/* 5. CONTACT (Simple Footer match) */}
        <div className="text-center mt-11 pt-6 border-t border-slate-200">
          <p className="text-gray-500 text-sm">Developed by a New Full-Stack Developer</p>
          
        </div>

      </div>
    </div>
        </>
    )
}
export default AboutPage