import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue({changeDate}) {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const transferData = (newValue) => {
    setValue(newValue);
    changeDate(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem>
          <DateCalendar value={value} onChange={(newValue) => transferData(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}