import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

export const Conversion = () => {
    const [type, setType] = React.useState('');
    const [convert, setConvert] = React.useState('');
    const [degrees, setDegrees] = React.useState('');
    const [result, setResult] = React.useState('');

    const handleConvert = () => {
        if (type === convert) {
            setResult('Error: Cannot convert to the same type');
            return;
        }
        let tempResult;
        if (type === 1) {
            if (convert === 2) {
                tempResult = degrees * 9 / 5 + 32;
            } else if (convert === 3) {
                tempResult = parseFloat(degrees) + 273.15;
            }
        } else if (type === 2) {
            if (convert === 1) {
                tempResult = (degrees - 32) * 5 / 9;
            } else if (convert === 3) {
                tempResult = (degrees - 32) * 5 / 9 + 273.15;
            }
        } else if (type === 3) {
            if (convert === 1) {
                tempResult = degrees - 273.15;
            } else if (convert === 2) {
                tempResult = (degrees - 273.15) * 9 / 5 + 32;
            }
        }
        let unit;
        if (convert === 1) {
            unit = '°C';
        } else if (convert === 2) {
            unit = '°F';
        } else if (convert === 3) {
            unit = 'K';
        }
        setResult(tempResult + ' ' + unit);
    }

    return (
        <div className='bg-gradient-to-r from-[#6dd5ed] to-[#a6ffcb] h-screen'>
            <div className="flex items-center h-screen bg-image-2 bg-cover justify-between">
                {/* illustration */}
                <div className="w-[45rem] h-[44rem] bg-cover bg-image-1 mb-12 "></div>

                {/* card */}

                <div className="shadow rounded-[1rem] w-[35rem] overflow-hidden bg-white h-[24rem] mb-[4rem] mr-[8rem]">
                    <div className='h-[50px] w-[35rem] font-semibold bg-[#1976D2] text-white overflow-hidden pt-2.5 mb-10'>TEMPERATURE CONVERTER</div>
                    <TextField id="standard-basic" label="Degrees" variant="standard" size='small' sx={{ width: 80 }} value={degrees} onChange={event => setDegrees(event.target.value)} />
                    <FormControl variant="standard" size='small' sx={{ minWidth: 160, marginLeft: 3 }}>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={type}
                            onChange={event => { setType(event.target.value) }}
                            label="Type"
                            fullWidth
                        >

                            <MenuItem value={1}>Celsius</MenuItem>
                            <MenuItem value={2}>Fahrenheit</MenuItem>
                            <MenuItem value={3}>Kelvin</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" size='small' sx={{ minWidth: 160, marginLeft: 3 }}>
                        <InputLabel>Convert to</InputLabel>
                        <Select
                            value={convert}
                            onChange={event => { setConvert(event.target.value) }}
                            label="Convert"
                            fullWidth
                        >

                            <MenuItem value={1}>Celsius</MenuItem>
                            <MenuItem value={2}>Fahrenheit</MenuItem>
                            <MenuItem value={3}>Kelvin</MenuItem>
                        </Select>
                    </FormControl><br></br>
                    <br></br>
                    <TextField id="standard-basic" label="Result" variant="standard" size='small' sx={{ width: 448, marginTop: 3 }} value={result} /><br></br>
                    <br></br>
                    <br></br>
                    <Button variant='contained' onClick={handleConvert} sx={{ marginTop: 3 }}><b>Convert</b></Button>
                </div>
            </div>

        </div>

    )
}
