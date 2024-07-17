import Image from 'next/image'
import Form from './Form'
import Header from './Header'

// App/Header/Form bileşenlerine ayırın, kendi adlarıyla ayrı dosyalara koyun

export default function App() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <Header />
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <Form />
      </div>
    </div>

  )
}
