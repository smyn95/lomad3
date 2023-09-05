'use client';

import { useRef, useState } from 'react';

const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const RADIUS_OFFSET = 24;
const ENABLE_MONTHS = [12, 24, 36, 48, 60];

export default function PaymentBar() {
  const [currentMonth, setCurrentMonth] = useState(36);
  const [display, setDisplay] = useState('block');
  const [isDragging, setIsDragging] = useState(false);
  const [monthPosition, setMonthPosition] = useState('50%');
  const sectionRef = useRef(null);

  const updateMonthState = (month, index) => {
    const isNow = month === 'NOW';

    if (isNow) {
      setDisplay('none');
      return;
    }

    setDisplay('block');
    setCurrentMonth(month);
    setMonthPosition(`${index * 25}%`);
  };

  const getClosestMonth = (percentage) => {
    const index = Math.round(percentage / (100 / (ENABLE_MONTHS.length - 1)));

    return ENABLE_MONTHS[Math.min(index, ENABLE_MONTHS.length - 1)];
  };

  const calculateDragPositionX = (moveEvent) => {
    const paymentBarLeft = sectionRef.current.getBoundingClientRect().left;
    const mousePositionX = moveEvent.clientX - paymentBarLeft;
    const paymentBarWidth = sectionRef.current.offsetWidth - 2 * RADIUS_OFFSET;

    const percentage =
      (Math.min(
        Math.max(RADIUS_OFFSET, mousePositionX),
        paymentBarWidth + RADIUS_OFFSET,
      ) -
        RADIUS_OFFSET) /
      paymentBarWidth;

    return percentage * 100;
  };

  const touchMoveHandler = (touchEvent) => {
    const activeTouch = touchEvent.touches[0];
    const newPosition = calculateDragPositionX(activeTouch);

    setCurrentMonth(getClosestMonth(newPosition));
    setMonthPosition(`${newPosition}%`);
  };

  const touchEndHandler = (touchEvent) => {
    const firstTouchPoint = touchEvent.changedTouches[0];
    const newPosition = calculateDragPositionX(firstTouchPoint);
    const closestMonth = getClosestMonth(newPosition);

    setIsDragging(false);
    setCurrentMonth(closestMonth);
    setMonthPosition(`${ENABLE_MONTHS.indexOf(closestMonth) * 25}%`);

    document.removeEventListener('touchmove', touchMoveHandler);
  };

  const touchStartHandler = (touchEvent) => {
    touchEvent.preventDefault();
    setIsDragging(true);

    document.addEventListener('touchmove', touchMoveHandler);
    document.addEventListener('touchend', touchEndHandler, { once: true });
  };

  const mouseMoveHandler = (moveEvent) => {
    moveEvent.preventDefault();

    const newPosition = calculateDragPositionX(moveEvent);

    setCurrentMonth(getClosestMonth(newPosition));
    setMonthPosition(`${newPosition}%`);
  };

  const mouseUpHandler = (moveEvent) => {
    const newPosition = calculateDragPositionX(moveEvent);
    const closestMonth = getClosestMonth(newPosition);

    setIsDragging(false);
    setCurrentMonth(closestMonth);
    setMonthPosition(`${ENABLE_MONTHS.indexOf(closestMonth) * 25}%`);

    document.removeEventListener('mousemove', mouseMoveHandler);
  };

  const dragHandler = (clickEvent) => {
    clickEvent.preventDefault();
    setIsDragging(true);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  return (
    <section className="w-[360px]">
      <div className="flex h-[34px] w-full items-center justify-between gap-2 text-primaryWhite">
        <section className="relative h-full w-[20%] rounded-[17px] bg-gray-80 text-body2">
          <button
            type="button"
            className="flex h-full w-full items-center justify-center"
            onClick={() => updateMonthState('NOW', -1)}
          >
            NOW
          </button>
          <button
            type="button"
            className="absolute left-[12px] top-[-7px] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-80 bg-primaryWhite text-body2 font-bold text-primaryBlack"
            style={{ display: display === 'none' ? 'block' : 'none' }}
          >
            NOW
          </button>
        </section>

        <section className="relative h-full w-[80%]" ref={sectionRef}>
          <ul className="flex h-full items-center rounded-[17px] bg-gray-80 text-center text-body2">
            {ENABLE_MONTHS.map((month, index) => (
              <li key={month} className="w-[20%] cursor-pointer">
                <span
                  role="button"
                  className="block"
                  onClick={() => updateMonthState(month, index)}
                  onKeyDown={() => updateMonthState(month, index)}
                  tabIndex={0}
                >
                  {month}
                </span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`absolute top-[-7px] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-80 bg-primaryWhite text-body2 font-bold text-primaryBlack ${
              !isDragging ? 'transition-all' : ''
            }`}
            style={{
              left: monthPosition,
              transform: `translateX(-${monthPosition})`,
              display,
            }}
            onMouseDown={isTouchScreen ? null : dragHandler}
            onTouchStart={touchStartHandler}
          >
            {currentMonth}
          </button>
        </section>
      </div>
    </section>
  );
}
