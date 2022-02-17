import Container from "./container"

export default function Footer() {
  return (
    <footer className="mt-12 mb-4 text-right">
      <Container>
        <div className="flex justify-between items-center">
          
          <div className="CheckBox">
            <input className="checkbox-color-highlight checkbox-color--from checkboxDOM" type="checkbox"></input>
            <span className="checkbox-span"></span>
          </div>
          
          <small>© 2022 UNIX PATH - build with ♥ and <a className="underline-text uppercase" href="https://nextjs.org/">Next.js</a></small>
        </div>
      </Container>
    </footer>
  )
}