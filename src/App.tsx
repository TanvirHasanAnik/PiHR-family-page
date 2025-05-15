import { zodResolver } from '@hookform/resolvers/zod';
import {
  VKBreadCrumbs,
  VKButton,
  VKCheckbox,
  VKDatepicker,
  VKInput,
  VKSelect
} from "@vivakits/react-components";
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import './App.css';
import { BookmarkIcon, BreadCrumbSeparator, CalendarIcon, DeleteIcon, EditIcon, ExpandIcon, FavoriteIcon, HelpIcon, NoDataFoundImage } from './icons';
import NavBar from './navbar';

const familyFormSchema = z.object({
  id:z.number().optional(),
  name: z.string().nonempty("name is required").max(50, "Name should be less than 50 characters"),
  relationship: z.object({
    value:z.string().nullable(),
    label:z.string().nullable()
  }).refine(
      (val) => val.value && val.label,
      { message: "Relationship is required" }
    ),
  gender: z.object({
    value:z.string().nullable(),
    label:z.string().nullable()
  }).refine(
      (val) => val.value && val.label,
      { message: "Gender is required" }
    ),
  nid: z.string().max(50, "Nid should be less than 50 characters").optional(),
  dob: z.date().nullable().optional(),
  profession: z.string().max(50, "Nid should be less than 50 characters").optional(),
  contact: z.string().min(4,"Should be between 4 and 13 digits").max(13,"Should be between 4 and 13 digits").nullable().optional(),
  isEmergencyContact: z.boolean().optional(),
})

type familyFormValues = z.infer<typeof familyFormSchema>;

const relationshipOptions = [
  { label: 'Father', value: '0' },
  { label: 'Mother', value: '1' },
  { label: 'Brother', value: '2' },
  { label: 'Sister', value: '3' },
]

const genderOptions = [
  { label: 'Male', value: '0' },
  { label: 'Female', value: '1' },
  { label: 'Others', value: '2' }
]

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
  const [familyList, setFamilyList] = useState<familyFormValues []>([]);

  const form = useForm<familyFormValues>({resolver: zodResolver(familyFormSchema),mode: 'onSubmit'});
  const {register, control, handleSubmit, formState: { errors }} = form;

  
  const onSubmit = function (data: familyFormValues){
    try{
      console.log(familyFormSchema.parse(data))
      console.log("form submitted",data);
      const newFamily = {
        id: 1,
        name: data.name,
        relationship: data.relationship,
        gender: data.gender,
        nid: data.nid,
        dob: data.dob,
        profession: data.profession,
        contact: data.contact,
        isEmergencyContact: data.isEmergencyContact,
      }
      setFamilyList((prev) => [...prev, newFamily]);
      form.reset();
      console.log("family list", familyList);
    }catch (error){
      console.log("error",error)
    }
  }
    console.log(errors);
  
  return (
    <div className='font-sfpro'>
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
                  link: "px-0 py-1 text-white text-xs font-medium leading-none leading-[18px]",
                }}
                />
              </div>
              <div>
                <h3 className='mt-0 text-xl font-bold text-white'>Leo_14 Chandra Messi_14 (000123454)</h3>
              </div>
            </div>
            <div className='flex py-4 gap-5'>
              <div className='flex justify-center items-center rounded-md bg-gray-50 bg-opacity-10 h-9 w-9 cursor-pointer'><HelpIcon/></div>
              <div className='flex justify-center items-center rounded-md bg-gray-50 bg-opacity-10 h-9 w-9 cursor-pointer'><BookmarkIcon/></div>
              <div className='flex justify-center items-center rounded-md bg-gray-50 bg-opacity-10 h-9 w-9 cursor-pointer'><FavoriteIcon/></div>
            </div>
          </div>
        </div>
        <div className='flex p-5 mx-5 mb-24 -mt-10 bg-white gap-2 rounded-xl'>
          <section className='min-w-[180px] pr-8 border-r'>
            <div className='flex flex-col'>
                <a href="" className='px-3 py-2 text-left rounded-md text-sm leading-5 font-semibold text-[rgb(52,64,84)] whitespace-nowrap'>Employee Info</a>
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
          <section className='w-full pb-5 pl-7 flex flex-col gap-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='family-form-wrapper w-full flex flex-col gap-4 p-5 rounded-xl bg-gray-50'>
                <div className='flex flex-col gap-1'>
                  <div className='input_wrapper grid grid-cols-2 gap-4'>
                    
                  <VKInput size="md" label="Name" labelClassName="text-xs font-semibold" isRequired={true} placeholder="Enter Name" type='text' id='name' rounded="md" hasError={errors.name !== undefined} errorMessage={errors?.name?.message} {...register("name")}/>
                  
                  <Controller
                    name="relationship"
                    control={control}
                    render={({ field }) => (
                      <VKSelect
                        label="Relationship"
                        labelClassName="text-xs font-semibold"
                        isRequired={true}
                        placeholder="Select Relationship"
                        rounded="md"
                        size='md'
                        className="bg-white"
                        isSearchable={true}
                        dropdownIndicator=<ExpandIcon/>
                        hasError={errors.relationship !== undefined} 
                        errorMessage={errors?.relationship?.message}
                        options={relationshipOptions}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <VKSelect
                        label="Gender"
                        labelClassName="text-xs font-semibold"
                        isRequired={true}
                        placeholder="Select Gender"
                        rounded="md"
                        size='md'
                        isSearchable={true}
                        className="bg-white"
                        dropdownIndicator=<ExpandIcon/>
                        hasError={errors.gender !== undefined} 
                        errorMessage={errors?.gender?.message}
                        options={genderOptions}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                    
                  <VKInput size="md" label="NID/SSN" labelClassName="text-xs font-semibold" placeholder="Enter NID/SSN" type='text' id='nid-ssn'  rounded="md" hasError={errors.nid !== undefined} errorMessage={errors?.nid?.message} {...register("nid")}/>
                  
                  <Controller
                    name="dob"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-col">
                        <label htmlFor="dob" className="text-xs font-semibold mb-1 pb-1">
                          Date of Birth
                        </label>
                        <VKDatepicker
                          className="border-gray-200"
                          id="dob"
                          placeholder='Select Date'
                          value={field.value}
                          format="DD-MM-YYYY"
                          icon=<CalendarIcon/>
                          iconPosition="end"
                          onChange={(event) => {
                            field.onChange(event.date);
                          }}
                        />
                        {errors?.dob && (
                          <span className="text-xs text-red-500 mt-1">
                            {errors.dob.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                  <VKInput size="md" label="Profession" labelClassName="text-xs font-semibold" placeholder="Enter Profession" type='text' id='profession'  rounded="md" hasError={errors.profession !== undefined} errorMessage={errors?.profession?.message} {...register("profession")}/>
                    
                  <VKInput size="md" label="Contact No" labelClassName="text-xs font-semibold" placeholder="Enter Contact" type='number' id='contact'  rounded="md" hasError={errors.contact !== undefined} errorMessage={errors?.contact?.message} {...register("contact")}/>
                  </div>
                  <div className='check_wrapper pt-5'>
                    <VKCheckbox className='border-blue-300' size='sm' rounded="sm" color={'primary'} {...register("isEmergencyContact")}><span className='text-dropDownTextGray text-xs font-medium'>Emergency Contact</span></VKCheckbox>
                  </div>
                </div>
                <div className='submit_button_wrapper'>
                  <VKButton type='submit' size="md" rounded="md" className='px-10'>
                    Save info
                  </VKButton>
                </div>
              </div>
            </form>
            <div className='family-table-wrapper table-fixed w-full'>
              <table className="bg-white overflow-hidden w-full">
                <thead>
                  <tr className="bg-[#f2f5ff] border-b border-gray-200">
                    <th className="py-2.5 px-5 w-1/5 text-xs font-semibold text-gray-900 text-left">Name</th>
                    <th className="py-2.5 px-5 w-1/5 text-xs font-semibold text-gray-900 text-left">Relationship</th>
                    <th className="py-2.5 px-5 w-1/5 text-xs font-semibold text-gray-900 text-left">Contact</th>
                    <th className="py-2.5 px-5 w-1/5 text-xs font-semibold text-gray-900 text-left">Emergency Contact</th>
                    <th className="py-2.5 px-5 w-1/5 text-xs font-semibold text-gray-900 text-right"><span className='pr-4'>Action</span></th>
                  </tr>
                </thead>
                <tbody>
                  {familyList.length > 0 ? familyList.map((family: familyFormValues)=>{
                    return <>
                    <tr key={family.id} className="border-b border-gray-200">
                      <td className="py-2.5 px-5 w-1/5 text-sm font-medium text-gray-900 break-all">{family.name}</td>
                      <td className="py-2.5 px-5 w-1/5 text-sm font-medium text-gray-500 break-all">{family.relationship.label}</td>
                      <td className="py-2.5 px-5 w-1/5 text-sm font-medium text-gray-500 break-all">{family.contact}</td>
                      <td className="py-2.5 px-5 w-1/5 text-sm font-medium text-gray-500 break-all">{family.isEmergencyContact ? "Yes" : "No"}</td>
                      <td className="py-2.5 px-5 w-1/5">
                      <div className="flex items-center w-full justify-end">
                        <div 
                        className='edit_icon_wrapper flex items-center justify-center h-8 w-8 cursor-pointer rounded-md hover:bg-blue-50'
                        onClick={()=>{}}
                        >
                          <EditIcon/>
                        </div>
                        <div 
                        className='delete_icon_wrapper  cursor-pointer rounded-md hover:bg-red-50'
                        onClick={()=>{}}
                        >
                          <DeleteIcon/>
                        </div>
                      </div>
                      </td>
                    </tr>
                    </>
                  }) : 

                  <tr>
                    <td colSpan={5} className="py-5 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <NoDataFoundImage />
                        <span className="font-semibold text-gray-400">No Data Found</span>
                      </div>
                    </td>
                  </tr>
                  }
                </tbody>
              </table> 
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
