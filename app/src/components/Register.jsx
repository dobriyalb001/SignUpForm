import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { RegisterURL } from '../URL/FetchURL';
import {useLocation, useNavigate} from 'react-router-dom';

import AuthStore from '../Store/AuthStore';


const Register = () => {
const navigate=useNavigate();

const setToken = AuthStore((state) => state.setToken);
const token = AuthStore((state) => state.token); 

const location = useLocation();


  const mutation = useMutation({
    mutationFn: RegisterURL,
    onSuccess: (data) => {

      console.log('User registered:', data);
      setToken(data.accessToken)
      console.log(data.accessToken)



      navigate('/about');
    },
    onError: (error) => {
      console.error('Registration failed:', error.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      collegeId: 'any',
    },
  });

  const onSubmit = (data) => {
    const formattedName = data.name
      ? data.name.charAt(0).toUpperCase() + data.name.slice(1).toLowerCase()
      : '';

    const newdata = {
      ...data,
      userName: formattedName,
      collegeId: '1', // ensure this is always included
    };

    mutation.mutate(newdata);
  };

  if (mutation.isPending) return <p>Submission is taking place...</p>;
  

  return (
    <>
      <h1>This is the LOGIN page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            {...register('name', {
              required: {
                value: true,
                message: 'The name field is required',
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="stream">Stream:</label>
          <input
            id="stream"
            {...register('stream', {
              required: 'Stream is required',
            })}
          />
          {errors.stream && <p>{errors.stream.message}</p>}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select id="category" {...register('category')} defaultValue="">
            <option value="" disabled>
              --Select--
            </option>
            <option value="GENERAL">General</option>
            <option value="EWS">EWS</option>
            <option value="DALIT">Dalit</option>
          </select>
        </div>

        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            id="phone"
            {...register('mobile', {
              required: 'mobile is required',
              pattern: {
                value: /^\d{10}$/i,
                message: 'Invalid mobile number',
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" {...register('gender')} defaultValue="">
            <option value="" disabled>
              --Select--
            </option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHERS">Others</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
