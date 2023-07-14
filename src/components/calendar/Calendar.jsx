import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs'

function disableWeekends(date) {
  return dayjs(date).day() === 0 || dayjs(date).day() === 6
}

const Calendar = () => {
  return (
    <>
        <h1>Calendar</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker orientation='portrait' 
            disablePast 
            disableHighlightToday 
            value={dayjs(new Date())} 
            shouldDisableDate={disableWeekends}
            
           />
        </LocalizationProvider>
    </>
  );
}

export default Calendar