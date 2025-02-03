import Link from 'next/link'

const Nav = () => {
  return (
    <div className='flex justify-between py-4 font-bold text-white text-xl px-4 bg-slate-600'>
      <h1 >MY WEB</h1>
      <ul className='flex space-x-5'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/components/about'}> About</Link></li>
        <li><Link href={'/components/contact'}>Contact</Link></li>
      </ul>
      <h1>cart</h1>
    </div>
  )
}

export default Nav
