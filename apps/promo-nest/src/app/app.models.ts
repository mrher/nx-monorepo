export type BaseResponse<T> = {
  success: boolean;
  code: number;
  data?: T;
};

export type QuestionTopic = {
  readonly id: number;
  caption?: string;
};
