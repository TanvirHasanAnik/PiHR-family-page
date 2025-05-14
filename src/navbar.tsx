import './App.css'
import { ExpandIcon,SearchIcon, NotificationIcon } from './icons';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@vivakits/react-components";

function NavBar() {
    return (
        <nav className='flex flex-row px-6 justify-between h-[72px]'>
        <section className='flex gap-6 items-center'>
          <img src="https://d24jbthbqns2k7.cloudfront.net/Staging/HuduriDocument/CompanyImages/2/2.png" alt="PiHR logo" className='h-[48px] w-[78px] cursor-pointer'/>
          <ul className='flex'>
            <li className='hover:bg-hoverBG hover:rounded-[6px]'>
              <Dropdown>
                <DropdownTrigger>
                    <p className='flex p-[12px] font-medium text-xs lg:!text-sm items-center gap-[4px] text-dropDownTextGray cursor-pointer'>
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
    )
}

export default NavBar