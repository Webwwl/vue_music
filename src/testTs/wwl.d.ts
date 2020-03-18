declare module 'wwl' {
  class Wwl {
    say(str: string):void
  }
  namespace Wwl {
    export const version: string
  }

  export = Wwl
}