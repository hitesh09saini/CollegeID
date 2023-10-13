import React from 'react'
import img from '../../assets/img.png'
import StudentsCard from '../StudentsCard/StudentsCard';
import './Colleges.css'
import collegeIMG from '../../assets/collegeImg.jpg'

const Colleges = ({ collegeImg, location }) => {
    return (
        <div>

            <div className="collegeTag bg-gray-500 p-6">
                <div className=" text-4xl font-bold text-white">
                    <div className='flex text-xl justify-between'>
                        <div className="collegeIMG" style={{ backgroundImage: `url(${collegeIMG || collegeImg})` }}></div>
                        <p className='flex gap-[10px] items-center h-fit'><i class="fa-solid fa-location-dot fa-lg" style={{ color: "#37114b" }}></i>{location || "India"}</p>
                    </div>
                    Arya College of Engineering
                </div>

            </div>
            <div className='p-5 border-2 md:flex justify-between'>

                <input placeholder='Search Student' type="text" className='border border-black self-end outline-none p-1 pl-4  rounded-2xl' />

                <div className=' w-fit h-fit '>
                    <div className='border h-fit w-fit m-2'>
                        <select name="" id="select" className='p-2 outline-0'>
                            <option value="select">Select Branch</option>
                            <option value="ee">Electrical Engineering</option>
                            <option value="me">Mechanical Engineering</option>
                            <option value="cse">Civil Engineering</option>
                            <option value="ai">Artificial Intelligence</option>
                            <option value="cs">Computer Science</option>
                        </select>
                    </div>
                    <div className='border m-2 h-fit  w-fit'>
                        <select name="" id="select" className='p-2 outline-0'>
                            <option value="select">Select relationship</option>
                            <option value="sg">Single</option>
                            <option value="mg">Mingle</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className='flex flex-wrap gap-5  p-6 justify-center items-center'>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single" />
                <StudentsCard name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single" />
                <StudentsCard name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle" />
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single" />
            </div>

        </div>
    )
}

export default Colleges