import type { NextPage } from 'next'
import { Footer, QuestionInput, Header} from "@components"

const Home: NextPage = () => {
  return (
    <div className="bg-blue-500 text-gray-100 px-8 py-12">
      <Header />
      <QuestionInput />
      <Footer />
    </div>
  )
}

export default Home
