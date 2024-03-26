"use client";

import { FormEvent, useState } from "react";

interface QuestionProps {
  title: string;
  text: string;
  choices: string[];
  answer: string;
}
const MapQuestion = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
};

export const Question = ({ choices, text, answer, title }: QuestionProps) => {
  const [selected, setSelected] = useState<string>("");

  const [validation, setValidation] = useState<{
    isValidated: boolean;
    isRight: boolean;
  }>({
    isValidated: false,
    isRight: false,
  });

  const handleSelected = (choice: string) => {
    setValidation({ isRight: false, isValidated: false });
    setSelected(choice);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidation({
      isValidated: true,
      isRight: answer === selected,
    });
  };

  return (
    <form
      className="p-4 border-2 border-purple-800 rounded-md"
      onSubmit={(e) => handleSubmit(e)}
      method="POST"
    >
      <h1 className="text-lg mb-4">{title}</h1>
      <p className="text-md">{text}</p>
      <div className="flex flex-col gap-4 w-full items-start">
        {choices.map((choice, index) => {
          return (
            <button
              key={choice}
              className="h-16 p-4  text-white flex gap-4"
              type="button"
              onClick={() => handleSelected(choice)}
              // disabled={validation.isValidated}
            >
              <span
                className={`w-8 h-8 rounded-full border-2 ${
                  selected === answer &&
                  validation.isValidated &&
                  choice === selected
                    ? "text-lime-600 border-lime-600"
                    : validation.isValidated && selected !== answer &&  choice === selected
                    ? "text-red-600 border-red-600"
                    : "text-white"
                }  flex items-center justify-center`}
              >
                {index + 1}
              </span>

              <span
                className={`flex items-center justify-center ${
                  selected === choice ? "text-purple-600" : "text-white"
                }`}
              >
                {" "}
                {choice}
              </span>
            </button>
          );
        })}
        {!validation.isValidated ? (
          <button
            className="p-4 border-2 border-lime
        -600 rounded-md"
          >
            RESPONDER
          </button>
        ) : (
          <p
            className={`text-lg ${
              validation.isRight ? "text-lime-600" : "text-red-600"
            }`}
          >
            {validation.isRight ? "Você acertou!" : "Voce Errou!"}
          </p>
        )}
      </div>
    </form>
  );
};
