module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue-123': '#172339',
        'grey-123': '#49566D',
        'cream-123': '#F3EDE7',
        'cream-white-123': '#FAF8F6',
        'purple-blue-123': '#A060FF',
        'purple-123': '#CB30E3',
        'orange-123': '#FFA84E',
      },
      width: {
        curvedLined: 'clamp(14.44rem, 7.44vw + 10.87rem, 17.56rem)',
      },
      height: {
        curvedLined: 'clamp(1.81rem, 1.04vw + 1.31rem, 2.25rem)',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
    fontSize: {
      dynamic: [
        'clamp(3.5rem, 2.38vw + 2.36rem, 4.5rem)',
        {
          lineHeight: 'clamp(4rem, 2.08vw + 3rem, 4.88rem)',
        },
      ],
    },
  },
  plugins: [],
};
