import { IBaseState } from "../base-state.model";
import { IResponseBase } from "../response-base.model";

export interface IQuiz {
  id: string;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  lessonId: string;
}

export const emptyQuiz: IQuiz = {
  id: "",
  question: "",
  answers: [""],
  correctAnswerIndex: 0,
  lessonId: "",
};

export interface IQuizState extends IBaseState {
  readonly quizs: IQuiz[];
  readonly quiz: IQuiz;
}

export interface IQuizResponse extends IResponseBase {
  data: IQuiz;
}

export interface IQuizResponses extends IResponseBase {
  data: IQuiz[];
}
