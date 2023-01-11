import { ChangeEvent, useState } from "react"

const useForm = <T,>(initState: T) => {
  const [form, setForm] = useState(initState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return {
    form,
    handleChange,
  }
}

export default useForm
