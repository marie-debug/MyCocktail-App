import { FaSadCry } from "react-icons/fa"

function Error() {
  return (
    <>
        <section className='content'>
            <h1>Oops...</h1>
            <p>Something went wrong, try again</p>
            <FaSadCry />
        </section>
        <div className='form-group'>
            <button type='submit' className='btn btn-block'>Search Again</button>
        </div>
    </>
  )
}

export default Error