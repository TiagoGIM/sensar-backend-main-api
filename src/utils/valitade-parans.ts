import validate from 'uuid-validate'

export class Id implements isValid {
  isValid (params: string) {
    return validate(params)
  }

}

interface isValid {
  isValid : (params : any) => boolean
}