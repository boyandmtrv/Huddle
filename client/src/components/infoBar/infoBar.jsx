import closeIcon from '../../../public/icons/closeIcon.svg';
import onlineIcon from '../../../public/icons/onlineIcon.svg';
import { TbLayersIntersect } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";



const InfoBar = ({
    room
}) => {

    return (
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-[#f0c19557]">
            <div className="relative flex items-center space-x-4">
                <div className="relative">
                    <TbLayersIntersect className='text-white ml-5 text-4xl' />
                </div>
                <div className="flex flex-col leading-tight">
                    <div className="text-2xl mt-1 flex items-center">
                        <span className="text-white mr-3">{room}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button type="button" className="inline-flex items-center justify-center  h-10 w-10 ">
                    <a href="/">
                        <IoMdCloseCircle  className='text-red-500 mr-5 text-2xl hover:text-white transition duration-500 ease-in-out'/>
                    </a>
                </button>
            </div>
        </div>
    )
};

export default InfoBar;