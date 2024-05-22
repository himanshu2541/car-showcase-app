import Link from 'next/link'
import {CustomButton} from "@/components";
const Navbar = () => {
  return(
    <header className="w-full absolute z-10">
      <nav className={"max-w-[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4"}>

        <Link href="/" className={'flex justify-center items-center text-3xl font-bold'}>
          Car <span className={'text-primary-blue font-black'}>HYRE</span>
        </Link>

        <CustomButton
          containerStyles={'flex justify-center items-center font-medium rounded-full bg-white hover:bg-gray-100'}
          title={'Sign In'}
          btnType={'button'}
        />

      </nav>
    </header>
  )
}

export default Navbar
