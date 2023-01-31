import { FaSadCry } from "react-icons/fa"

import SearchAgain from '../components/SearchAgain'

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
        <SearchAgain />
    </>
  )
}

export default Error