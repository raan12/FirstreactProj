
import React, { useState } from 'react';
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export default function Users() {
    // const user = [  {1},{2},{3}  ];
    const [user, setUser] = useState([
        {
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "id": 3,
            "title": "est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771732"
        },
        {
            "id": 3,
            "title": "est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771732"
        },
        {
            "id": 3,
            "title": "est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771732"
        }
    ]);


    // datepicker
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <div>
            <h3>DatePicker</h3>
            <div className="col-md-3">
                <DateRangePicker
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                    minimumDate={new Date()}
                    minimumLength={1}
                    format='dd MMM yyyy'
                    locale={enGB}>
                    {({ startDateInputProps, endDateInputProps, focus }) => (
                        <div className='date-range d-flex'>
                            <input
                                className={'form-control input' + (focus === START_DATE ? ' -focused' : '')}
                                {...startDateInputProps}
                                placeholder='Start date'
                            />
                            <span className='date-range_arrow' />
                            <input
                                className={'form-control input' + (focus === END_DATE ? ' -focused' : '')}
                                {...endDateInputProps}
                                placeholder='End date'
                            />
                        </div>
                    )}
                </DateRangePicker>
            </div>


            <h3>Users component</h3>
            <div class="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) =>
                            <tr>
                                <td key={i}>{item.id}</td>
                                <td key={i}>{item.title}</td>
                                <td key={i}><img src={item.thumbnailUrl} width="80" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
</div>

        </div>
    )
}
