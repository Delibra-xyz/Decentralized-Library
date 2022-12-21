const Eye = ({ className }) => {
  return (
    <svg
      className={className}
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.3327 10.5C18.3327 10.5 15.8327 15.5 9.99935 15.5C4.16602 15.5 1.66602 10.5 1.66602 10.5C1.66602 10.5 4.16602 5.5 9.99935 5.5C15.8327 5.5 18.3327 10.5 18.3327 10.5Z'
        stroke='url(#paint0_linear_1217_4370)'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <circle cx='10' cy='10.5' r='2.5' stroke='url(#paint1_linear_1217_4370)' strokeWidth='2' strokeLinecap='round' />
      <defs>
        <linearGradient
          id='paint0_linear_1217_4370'
          x1='1.66602'
          y1='5.5'
          x2='19.7018'
          y2='9.9467'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#02081F' />
          <stop offset='0.96875' stopColor='#1A0830' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_1217_4370'
          x1='7.5'
          y1='8'
          x2='13.1167'
          y2='8.83088'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#02081F' />
          <stop offset='0.96875' stopColor='#1A0830' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Eye;
