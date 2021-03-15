// @flow
export type apiResultType = {
  data: { message: string, status: number }
};

export type postType = {
  url: string,
  inputs: any,
  showSnack?: boolean,
  headers: any
};

export type getType = { url: string, headers: any };

export type fileUploadType = {
  accept: string,
  id: string,
  rules: { validate: { ... }, required: { ... }, ... },
  required: boolean,
  maxSize: number,
  multiple: boolean,
  name: string
};

export type selectFieldType = {
  className: string,
  id: string,
  label: string,
  options: Array<string | { key: string, value: string }>,
  required: boolean,
  rules: any,
  name: string
};
