'use client';

import { useState } from 'react';

const optionList = [
  'option1',
  'option2',
  'option3',
  'option4',
  'option5',
  'option6',
  'option7',
  'option8',
  'option9',
  'option10',
];
export default function Select() {
  const [open, setOpen] = useState(false);
  const [clickedOption, setClickedOption] = useState(optionList[0]);

  const onClickOption = (option) => {
    setClickedOption(option);
    setOpen(false);
  };

  return (
    <div className="flex w-[320px] flex-col">
      <div className="flex h-[52px] w-full items-center justify-between border-b border-gray-40 px-2">
        <span className="w-1/5">옵션 1</span>
        <div
          role="button"
          tabIndex={0}
          className="flex w-4/5 cursor-pointer justify-between"
          onClick={() => setOpen((prev) => !prev)}
          onKeyDown={() => setOpen((prev) => !prev)}
        >
          <span>{clickedOption}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`${open ? 'rotate-180' : ''}`}
          >
            <path d="M10 13.5C9.87 13.5 9.74 13.45 9.65 13.35L4.65 8.34999C4.45 8.14999 4.45 7.83999 4.65 7.63999C4.85 7.43999 5.16 7.43999 5.36 7.63999L10.01 12.29L14.66 7.63999C14.86 7.43999 15.17 7.43999 15.37 7.63999C15.57 7.83999 15.57 8.14999 15.37 8.34999L10.37 13.35C10.27 13.45 10.14 13.5 10.02 13.5H10Z" />
          </svg>
        </div>
      </div>
      {open && (
        <ul className="flex flex-col border border-t-0 border-gray-40 lg:flex-row lg:flex-wrap">
          {optionList.map((option) => (
            <li
              key={option}
              className={`h-[46px] cursor-pointer px-4 text-body2 leading-[46px] hover:bg-gray-20 ${
                clickedOption === option ? 'font-bold' : ''
              } lg:w-1/2`}
            >
              <span
                role="button"
                tabIndex={0}
                onClick={() => onClickOption(option)}
                onKeyDown={() => onClickOption(option)}
                className="block w-full"
              >
                {option}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
