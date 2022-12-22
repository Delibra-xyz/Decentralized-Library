const ClosedBook = ({ className }) => {
  return (
    <svg
      className={className}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.25 2.25V15.75H6.75C5.09315 15.75 3.75 14.4069 3.75 12.75V5.25C3.75 3.59315 5.09315 2.25 6.75 2.25H14.25Z'
        stroke='#1F2937'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.75 13.5V13.5C3.75 12.2574 4.75736 11.25 6 11.25H13.25C13.8023 11.25 14.25 11.6977 14.25 12.25V12.75'
        stroke='#1F2937'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ClosedBook;
