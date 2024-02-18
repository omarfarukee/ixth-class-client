/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { FcEditImage } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
export default function EditImage() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const userData = sessionStorage.getItem('studentData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setStudentData(parsedUserData);
    }
  }, []);
  const { register, handleSubmit, formState: { errors,isDirty }} = useForm()
  const imageHostKey = '29473dd4ab78ebc95009722bc0558d38';

  const handleAddImage = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const imgData = await response.json();
      if (imgData.success) {
        const upload = {
          image: imgData.data.url,
        };

        const updateResponse = await fetch(`http://localhost:5000/update/student/${studentData?._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(upload),
        });

        const studentProfileImage = await updateResponse.json();
        console.log(studentProfileImage)
        if (studentProfileImage?.result?.modifiedCount === 1) {

          const updatedStudentData = { ...studentData,image: imgData.data.url };
          sessionStorage.setItem('studentData', JSON.stringify(updatedStudentData));
          toast.success('Successfully uploaded');
          location.reload();
        } else {
          toast.error('Failed to upload');
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const [hide, setHide] = useState("hidden text-blue-800 loading loading-spinner loading-md")

  const loaderButton = () => {
    
       setHide("block loading loading-spinner text-blue-800 loading-md");
   
    
  }
  return (
    <div>
      <div>
        <div className="flex justify-center mb-10 border-b-8">
          <div className=''>
            <FcEditImage className="ml-5 text-6xl"> </FcEditImage>
            <h1 className="font-bold">Upload Image</h1>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleAddImage)} className="flex justify-around mb-10">
          <div className="w-full max-w-xs form-control">
            <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
            <input type="file" multiple {...register("image", {
              required: "Required",
            })} className="w-full max-w-xs input input-bordered rounded-3xl" />
            {errors.image && <p className='text-red-500'>please select image file</p>}
          </div>
          <div className="text-white bg-base-300 hover:text-black btn rounded-3xl">
            <div className='flex'>
              <input
                className="text-white btn rounded-3xl"
                value="Upload"
                type="submit"
                disabled={!isDirty}
                onClick={loaderButton}
              />
              <span className={hide}></span>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
