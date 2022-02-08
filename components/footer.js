import Container from "./container"

export default function Footer() {
  return (
    <footer className="mt-14 mb-4 text-right">
      <Container>
        <small>© 2022 UNIX PATH - build with ♥ and <a className="underline-text uppercase" href="https://nextjs.org/">Next.js</a></small>
      </Container>
    </footer>
    )
  }