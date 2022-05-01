import React from 'react';

function DateTimePretty(Component) {
    // Возвращаем анонимный класс
    return class extends React.Component{

        GetDateTime(date)
        {
            const v_sec = 1000;
            const v_min = 1000 * 60;
            const v_hour = 1000 * 60 * 60;
            const v_day = 1000 * 60 * 60 * 24;

            let d_current = new Date();
            let d_value = new Date(date);

            let d_delta = d_current.getTime() - d_value.getTime();

            let d_delta_sec = Math.floor(d_delta / v_sec);
            let d_delta_min = Math.floor(d_delta / v_min);
            let d_delta_hour = Math.floor(d_delta / v_hour);
            let d_delta_day = Math.floor(d_delta / v_day);


            let v_result = '';
            if (d_delta_day > 0)
                v_result = d_delta_day + ' дней назад';
            else if (d_delta_hour > 0)
                v_result = d_delta_hour + ' часов назад';
            else if (d_delta_min > 0)
                v_result = d_delta_min + ' минут назад';
            else
                v_result = d_delta_sec + ' секунд назад';

            console.log(this.props.date, d_current, v_result);

            return v_result;
        }


        render() {
            return <Component date={this.GetDateTime(this.props.date)}/>;
        }
    }
}


export default DateTimePretty;