import type { NextPage } from 'next'
import { Footer, QuestionInput} from "@components"

const Home: NextPage = () => {
  return (
    <div className="container bg-yellow-100 text-gray-800 px-8 py-12 w-full">
      <h1>Home Page</h1>
      <QuestionInput />
      <Footer />
    </div>
  )
}

export default Home
