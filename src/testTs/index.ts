interface A {
  say(str: string): void
}

interface B {
  name: string
}

type u = A & B

const ins: u = {} as u