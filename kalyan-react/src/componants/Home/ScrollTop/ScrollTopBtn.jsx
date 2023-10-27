import { useState } from "react"
import "../ScrollTop/ScroolBtn.css"

export default function ScrollTopBtn() {
    const [active, setActive] = useState(false)

    const handleBtn =()=>{
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setActive(true)
        } else if(scrolled <= 300){
            setActive(false)
        }
    }

    const scrollToTopaction =()=>{
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }
    window.addEventListener("scroll", handleBtn)
  return (
    <div>
      <button onClick={scrollToTopaction} className="btn-scroll" style={{display : active ? "inline" : "none"}}><i className="bi bi-arrow-up-circle"></i></button>
    </div>
  )
}
