import { FaSadCry } from "react-icons/fa"
import { Link } from "react-router-dom"

function Error() {
  return (
    <>
        <section className='content'>
            <h1>Oops...</h1>
            <p>Something went wrong, try again.</p>
            <div id="cry">
              <FaSadCry size="4rem" color="#CCA79D"/>
            </div>
        </section>
        <div class="row justify-content-center">
          <button type='submit' className='btn btn-warning'><Link to="/">Take me Home</Link></button>
        </div>
    </>
  )
}

export default Error