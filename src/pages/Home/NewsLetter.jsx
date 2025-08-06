import Button from '../../Components/Button'

const NewsLetter = () => {
  return (
    <div className="relative text-white py-16 px-4 text-center mb-16">
        <div className="absolute inset-0 bg-black clip-shape"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Stay Updated!</h2>
          <p className="mb-6">
            Subscribe to our newsletter to receive security tips and event updates.
          </p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-full text-black outline-none"
            />
              <Button text = " Subscribe"  type="submit"/>
          
          </form>
        </div>
        <style jsx>{`
          .clip-shape {
            clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
          }
        `}</style>
    </div>
  )
}

export default NewsLetter
