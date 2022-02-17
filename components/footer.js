import Container from "./container"

export default function Footer() {
  return (
    <footer className="mt-12 mb-4 text-right">
      <Container>
        <div className="flex justify-between items-center">
          
          <div className="tree-node--color-from inline">
            <div className="CheckBox checkbox-span--color-from ml-2 mr-2 inline">
              <input className="checkboxDOM checkboxColorHighlight" type="checkbox"></input>
              <span className="checkbox-span checkbox-span--color-from"></span>
            </div>
          </div>
          
          <small>© 2022 UNIX PATH - build with ♥ and <a className="underline-text uppercase" href="https://nextjs.org/">Next.js</a></small>
        </div>
      </Container>
    </footer>
  )
}