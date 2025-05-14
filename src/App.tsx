import './App.css'
import NavBar from './navbar';
import { BreadCrumbSeparator,HelpIcon,BookmarkIcon,FavoriteIcon } from './icons';
import {
  VKBreadCrumbs,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  VKButton,
  VKGroup,
} from "@vivakits/react-components";

const breadcrumbOptions = [
		{
			title: "Operations",
			href: "#",
		},
		{
			title: "Employee List",
			href: "#",
		},
	];

function App() {
  
  return (
    <div>
      <NavBar/>
      <div className='min-h-[calc(100vh-72px)] pb-1 bg-gray-100'>
        <div className='title'>
          <div className='flex justify-between h-[120px] px-5 pb-[60px] pt2.5 bg-gradient-to-r from-[#496CDF] to-[#7160EF]'>
            <div>
              <div className='bread_crumb_wrapper'>
                <VKBreadCrumbs separator={<BreadCrumbSeparator/>} 
                underline={false}
                options={breadcrumbOptions} 
                style={{
                  item: "inline-flex items-center",
                  link: "py-1 text-white text-xs font-medium leading-none leading-[18px]",
                }}
                />
              </div>
              <div>
                <h3 className='mt-0 text-xl font-bold text-white'>Leo_14 Chandra Messi_14 (000123454)</h3>
              </div>
            </div>
            <div className='flex py-[10px] gap-5'>
              <div className='flex justify-center items-center rounded-md bg-gray-50 bg-opacity-10 h-9 w-9 cursor-pointer'><HelpIcon/></div>
              <div className='flex justify-center items-center rounded-md bg-gray-50 bg-opacity-10 h-9 w-9 cursor-pointer'><BookmarkIcon/></div>
              <div className='flex justify-center items-center rounded-md bg-gray-50 bg-opacity-10 h-9 w-9 cursor-pointer'><FavoriteIcon/></div>
            </div>
          </div>
        </div>
        <div className='flex p-5 mx-5 mb-24 -mt-10 bg-white gap-2 rounded-xl'>
          <section>
            <div className='flex flex-col pr-8 border-r'>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Employee Info</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Status</a>
                <a href="" className='bg-[rgb(116,97,244)] px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-white'>Family</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Education</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Employment</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Contact</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Supervisor</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Document</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Language</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Passport</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Talent</a>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)]'>Bank Account</a>
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </div>
  )
}

export default App
