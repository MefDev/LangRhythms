import { FieldValues, FieldError, UseFormRegister, Path } from 'react-hook-form'

type InputFieldProps<TFieldValues extends FieldValues> = {
  label: string
  placeholder: string
  register: UseFormRegister<TFieldValues>
  name: Path<TFieldValues>
  error?: FieldError
  type?: string
}

const InputField = <TFieldValues extends FieldValues>({
  label,
  placeholder,
  register,
  name,
  error,
  type = 'text',
}: InputFieldProps<TFieldValues>) => (
  <div className='mb-3'>
    <label htmlFor={label.toLowerCase()} className='text-gray-600 mb-2 font-open-sans font-bold inline-block'>
      {label}
    </label>
    <input
      className='block w-full rounded bg-gray-50 outline-none border-none h-14 placeholder:text-gray-500 placeholder:font-open-sans px-4'
      placeholder={placeholder}
      type={type}
      id={name}
      {...register(name)}
    />
    {error && (
      <span className='text-red-600 inline-block mt-2 text-sm'>
        {error.message}
      </span>
    )}
  </div>
)

export default InputField
