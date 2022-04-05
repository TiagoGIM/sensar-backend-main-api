  export interface ResponseCreateUpdate{
  status: StatusCreateUpdate;
  id?: string;
  error? : {}
}

export type Request = {
  body : any;
  params : any;
}


export enum StatusCreateUpdate  {
  SUCESS ='sucess',
  FAIL = 'fail',
}