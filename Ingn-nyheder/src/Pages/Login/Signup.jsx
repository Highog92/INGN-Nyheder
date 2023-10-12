// import style from '../Layout/MainLayout.module.scss'
// import { useForm } from 'react-hook-form'


export function Signup() {



  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    
    const url = 'http://localhost:4000/users'
    const body = new URLSearchParams()
    body.append('firstname', data.firstname)
    body.append('lastname', data.lastname)
    body.append('email', data.email)
    body.append('password', data.password)
    body.append('org_id', '1')
    body.append('is_active','1')

    

    const options = {
      method: 'POST',
      body: body
    }

    fetch(url, options).then(res => res.json()).then(data=> console.log(data));

  }
  return (
    // className={style.contactStyle}
    <section  >
      <h2>Eller opret bruger</h2>

      <form onSubmit={handleSubmit(onSubmit)} action="">
        <label htmlFor="">Fornavn
          <input {...register('firstname', { required: true, })} type="username" />
          {errors.firstname?.type === 'required' && <span>Du skal udfylde Efternavn</span>}
        </label>

        <label htmlFor="">Efternavn
          <input {...register('lastname', { required: true })} type="username" />
          {errors.lastname?.type === 'required' && <span>Du skal udfylde Efternavn</span>}
        </label>

        <label htmlFor="">Email
          <input {...register('email', { required: true })} type="username" />
          {errors.email?.type === 'required' && <span>Du skal udfylde Email</span>}
        </label>


        <label htmlFor="login">Password
          <input {...register('password', { required: true })} type="password" />
          {errors.password?.type === 'required' && <span>Du skal udfylde Password</span>}
        </label>

        <input type="submit" value="submit" />
      </form>
    </section>
  )
}
