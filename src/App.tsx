import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Benefits } from './components/sections/Benefits'
import { CallToAction } from './components/sections/CallToAction'
import { Contact } from './components/sections/Contact'
import { useLandingPage } from './hooks/useLandingPage'

function App() {
  const { data, loading, error } = useLandingPage()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-primary">Loading...</p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">
          Unable to load website content.
        </p>
      </div>
    )
  }

  return (
    <>
      <Header data={data} />

      <main>
        <Hero data={data} />
        <About data={data} />
        <Services />
        <Benefits />
        <CallToAction data={data} />
        <Contact data={data} />
      </main>

      <Footer data={data} />
    </>
  )
}

export default App