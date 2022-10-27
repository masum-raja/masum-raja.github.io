import GitHubCalendar from 'react-github-calendar';

const GitHub=()=>{
    return(
        <div
        name="skills"
        className="bg-black w-full h-max text-white pt-10"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                GitHub Calendar
            </p>
          </div>
        </div>

        <div className='w-11/12 m-auto pt-10 pb-10 flex justify-center'>
             <GitHubCalendar username="masum-raja" />
        </div>
      </div>
    )
}

export default GitHub