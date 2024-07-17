import Image from 'next/image'
export default function Header() {
    return (
      <>
        <Image
          className='mx-auto h-10 w-auto'
          src='/mark.svg'
          alt='Şirketiniz'
          width={500}
          height={500}
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Hesabınıza giriş yapın
        </h2>
   </>
    );
  }