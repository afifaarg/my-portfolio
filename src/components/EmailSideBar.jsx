import React from 'react';

const EmailSideBar = () => {
  return (
    <div className='flex flex-col items-center fixed text-white -right-8 bottom-0'>
      <ul className='mb-24'>
        <li className='text-sm rotate-90 hover:text-[#6EFFE1]'>
          <a href="mailto:afifa.argoubb@gmail.com">
            afifa.argoubb@gmail.com
          </a>
        </li>
      </ul>
      <div className='w-[1px] bg-white h-28' />
    </div>
  );
};

export default EmailSideBar;
