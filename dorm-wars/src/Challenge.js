import "./Challenge.css";

export default function Challenge({fromDorm, fromCount, toDorm, toCount, endDate, metric}) {
    const dateText = new Date(endDate);
    return (
        <>
         <div class="challenge">
            <p><strong>{fromDorm}</strong> challenged <strong>{toDorm}</strong></p>
            <p>
                tracking {metric}     
                <strong>   {fromCount}</strong> - <strong>{toCount}</strong>
            </p>
            <p>until <strong>{dateText.toLocaleString()}</strong></p>
         </div>
        </>
    )
}