import { ComponentProps } from 'react'
interface Button extends ComponentProps<'button'> {
  styles?: string
  text: string
}

const Button = ({ styles, type, text }: Button) => (
  <button
    type={type}
    className={`bg-blue-gradient rounded-[10px] py-4 px-6 font-poppins text-[18px] font-medium text-primary outline-none ${styles}`}
  >
    {text}
  </button>
)

export default Button
