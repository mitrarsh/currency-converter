import type { ChangeEvent } from "react"

type InputProps = {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className="text-text"> {label} </label>
      <input
        type="text"
        value={value}
        placeholder='مبلغ را وارد کنید...'
        className='outline-none border border-border p-4 rounded-xl flex gap-3 w-full'
        onChange={onChange}
      />
    </div>
  )
}
