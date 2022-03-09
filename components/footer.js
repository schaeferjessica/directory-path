import Container from "./container"

export default function Footer() {
  return (
    <footer className="mt-12 mb-4 text-right">
      <Container>
        <div className="flex justify-between items-center">
          
          <div className="CheckBox">
            <input className="checkboxDOM checkbox-color-highlight" type="checkbox"></input>
            <span className="checkbox-span"></span>
          </div>
          
          <small>
            <span>© 2022</span> 
            <strong className="uppercase font-normal"> ./_relative-path</strong> 
            <span> - build with ♥ and </span>
            <a className="underline-text uppercase" href="https://nextjs.org/">Next.js</a>
          </small>
        </div>
      </Container>
    </footer>
  )
}