import { zodResolver } from '@hookform/resolvers/zod';
import {
  VKBreadCrumbs,
  VKButton,
  VKCheckbox,
  VKInput,
  VKSelect
} from "@vivakits/react-components";
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import './App.css';
import { BookmarkIcon, BreadCrumbSeparator, FavoriteIcon, HelpIcon } from './icons';
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
  dob: z.string().optional(),
  profession: z.string().max(50, "Nid should be less than 50 characters").optional(),
  contact: z.string().min(4,"Should be between 4 and 13 digits").max(13,"Should be between 4 and 13 digits"),
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

  const form = useForm<familyFormValues>({resolver: zodResolver(familyFormSchema)});
  const {register, control, handleSubmit, formState: { errors }} = form;

  
  const onSubmit = function (data: familyFormValues){
    console.log("form submitted",data);
    try{
      console.log(familyFormSchema.parse(data))
    }catch (error){
      console.log("error",error)
    }
  }
  
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
          <section className='w-full pb-5 pl-7'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='family-form-wrapper w-full flex flex-col gap-4 p-5 rounded-xl bg-gray-50'>
                <div className='flex flex-col gap-1'>
                  <div className='input_wrapper grid grid-cols-2 gap-4'>
                    
                  <VKInput size="md" label="Name" labelClassName="text-xs font-semibold" isRequired={true} placeholder="Enter Name" type='text' id='name' rounded="md" errorMessage={errors?.name?.message} {...register("name")}/>

                  
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
                        hasError={errors.gender !== undefined} 
                        errorMessage={errors?.gender?.message}
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
                        hasError={errors.gender !== undefined} 
                        errorMessage={errors?.gender?.message}
                        options={genderOptions}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                    
                  <VKInput size="md" label="NID/SSN" labelClassName="text-xs font-semibold" placeholder="Enter NID/SSN" type='text' id='nid-ssn'  rounded="md" errorMessage={errors?.nid?.message} {...register("nid")}/>
                    
                  <VKInput size="md" label="Profession" labelClassName="text-xs font-semibold" placeholder="Enter Profession" type='text' id='profession'  rounded="md" errorMessage={errors?.profession?.message} {...register("profession")}/>
                    
                  <VKInput size="md" label="Contact No" labelClassName="text-xs font-semibold" placeholder="Enter Contact" type='number' id='contact'  rounded="md" errorMessage={errors?.contact?.message} {...register("contact")}/>
                  </div>
                  <div className='check_wrapper pt-5'>
                    <VKCheckbox rounded="md">Emergency Contact</VKCheckbox>
                  </div>
                </div>
                <div className='submit_button_wrapper'>
                  <VKButton size="md" rounded="md" className='px-10'>
                    Save info
                  </VKButton>
                </div>
              </div>
            </form>
            <div className='family-table-wrapper'>Table</div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
