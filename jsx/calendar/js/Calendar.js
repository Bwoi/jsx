function Calendar(props) {

	const { date } = props;

	const corrDay = (new Date(date.getFullYear(), date.getMonth(), 1).getDay());

	let neededDays = [];
	for (let i = -corrDay + 2; i <= Math.ceil( new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() / 7 ) * 7; i++) {
		neededDays[neededDays.length] = new Date(date.getFullYear(), date.getMonth(), i);
	}

	let weekAndDays = [];
	for (let week = 1; week <= Math.ceil( new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() / 7 ); week++) {

		weekAndDays[weekAndDays.length] = [];

		for ( let day = (week * 7) - 6; day <= week * 7; day++) {
			weekAndDays[week-1][weekAndDays[week-1].length] = neededDays[day-1];
		}

	}

	function getItemRow(item, index) {
		return (
			<tr key={index}>
				{item.map(function(val, ind){
					return (
						<td key={ind} className={val.getDate() === date.getDate() && val.getMonth() === date.getMonth() ? 'ui-datepicker-today' : val.getMonth() !== date.getMonth() ? 'ui-datepicker-other-month' : ''}>
							{ val.getDate() }
						</td>
					)
				})}
			</tr>
		);
	}

	function getDayNamesRow(val, ind) {
		const attrConfig = {
			scope : 'col'
		};
		return (
			<th scope={attrConfig.scope} key={ind} title={val.toLocaleString('ru', { weekday: 'long' })}>{val.toLocaleString('ru', { weekday: 'short' })}</th>
		)
	}

	function Month(props){

		const {month} = props;
		switch (month) {
			case 'январь' :
				return ( <div className="ui-datepicker-material-month">января</div> );
				break;
			case 'Февраль' :
				return ( <div className="ui-datepicker-material-month">Февраля</div> );
				break;
			case 'март' :
				return ( <div className="ui-datepicker-material-month">марта</div> );
				break;
			case 'апрель' :
				return ( <div className="ui-datepicker-material-month">апреля</div> );
				break;
			case 'май' :
				return ( <div className="ui-datepicker-material-month">мая</div> );
				break;
			case 'июнь' :
				return ( <div className="ui-datepicker-material-month">июня</div> );
				break;
			case 'июль' :
				return ( <div className="ui-datepicker-material-month">июля</div> );
				break;
			case 'август' :
				return ( <div className="ui-datepicker-material-month">августа</div> );
				break;
			case 'сентябрь' :
				return ( <div className="ui-datepicker-material-month">сентября</div> );
				break;
			case 'октябрь' :
				return ( <div className="ui-datepicker-material-month">октября</div> );
				break;
			case 'декабрь' :
				return ( <div className="ui-datepicker-material-month">декабря</div> );
				break;
		}

	}

	return (
		<div className="ui-datepicker">
			<div className="ui-datepicker-material-header">
				<div className="ui-datepicker-material-day">{date.toLocaleString('ru', { weekday: 'long' })}</div>
				<div className="ui-datepicker-material-date">
					<div className="ui-datepicker-material-day-num">{date.getDate()}</div>
					<Month month={date.toLocaleString('ru', { month: 'long' })} />
					<div className="ui-datepicker-material-year">{date.getFullYear()}</div>
				</div>
			</div>
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{date.toLocaleString("ru", { month: 'long' })}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
				</div>
			</div>
			<table className="ui-datepicker-calendar">
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className="ui-datepicker-week-end" />
					<col className="ui-datepicker-week-end" />
				</colgroup>
				<thead>
					<tr>
						{weekAndDays[0].map(getDayNamesRow)}
					</tr>
				</thead>
				<tbody>
				{ weekAndDays.map(getItemRow) }
				</tbody>
			</table>
		</div>
	);

}