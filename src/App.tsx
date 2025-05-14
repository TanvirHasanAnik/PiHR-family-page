import { useState } from 'react'
import './App.css'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  VKButton,
  VKGroup,
} from "@vivakits/react-components";

function App() {
  return (
    <div>
      <nav className='flex flex-row px-6 justify-between h-[72px]'>
        <section className='flex gap-6 items-center'>
          <img src="https://d24jbthbqns2k7.cloudfront.net/Staging/HuduriDocument/CompanyImages/2/2.png" alt="PiHR logo" className='h-[48px] w-[78px] cursor-pointer'/>
          <ul className='flex'>
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Attendance</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Leave</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Salary</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Employee</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Tax</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Provident Fund</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>KPI</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Resource Management</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
            
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs font-medium lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
                      <span>Setting</span>
                      <ExpandIcon/>
                    </p>
                </DropdownTrigger>
                  <DropdownMenu align="end">
                      <DropdownItem value="Edit">Edit</DropdownItem>
                      <DropdownItem value="Duplicate">Duplicate</DropdownItem>
                      <hr />
                      <DropdownItem value="Archive">Archive</DropdownItem>
                      <DropdownItem value="Duplicate">Delete</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </section>
        <section className='flex items-center gap-4'>
          <div className='p-2 rounded-md bg-gray-50 cursor-pointer'>
            <SearchIcon/>
          </div>
          <div className='p-2 rounded-md bg-gray-50 cursor-pointer'>
            <NotificationIcon/>
          </div>
          <div className=''>
            <img src="https://ik.imagekit.io/bwh9zd8ujsy/user.png?t=1747202643866" alt="profile picture" className='h-[32px] w-[32px] rounded-full cursor-pointer'/>
          </div>
        </section>
      </nav>
      <div className='bg-green-100'>
        <div className='title bg-yellow-100-'>title</div>
        <div className='content bg-gray-100'>content</div>
      </div>
    </div>
  )
}

function ExpandIcon(){
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentcolor"><path d="M5.33362 6.66666L8.00028 9.33332L10.667 6.66666" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  );
}

function SearchIcon(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  )
}

function NotificationIcon(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.7952 17.5C8.38281 18.0186 9.15468 18.3333 10.0001 18.3333C10.8454 18.3333 11.6173 18.0186 12.2049 17.5M15.0001 6.66666C15.0001 5.34057 14.4733 4.0688 13.5356 3.13112C12.5979 2.19344 11.3261 1.66666 10.0001 1.66666C8.67397 1.66666 7.4022 2.19344 6.46452 3.13112C5.52684 4.0688 5.00006 5.34057 5.00006 6.66666C5.00006 9.24181 4.35045 11.005 3.62478 12.1712C3.01266 13.1549 2.7066 13.6467 2.71783 13.784C2.73025 13.9359 2.76244 13.9938 2.88487 14.0846C2.99544 14.1667 3.49388 14.1667 4.49077 14.1667H15.5093C16.5062 14.1667 17.0047 14.1667 17.1152 14.0846C17.2377 13.9938 17.2699 13.9359 17.2823 13.784C17.2935 13.6467 16.9875 13.1549 16.3753 12.1712C15.6497 11.005 15.0001 9.24181 15.0001 6.66666Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  )
}

export default App
