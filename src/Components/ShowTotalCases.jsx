export const ShowTotalCases = (elem) => {
  
  console.log("show total cases", elem.TotalConfirmed);
  return (
      <div className = 'total-cases'>
          <p>Total Cases</p>
          <p>{elem.TotalConfirmed}</p>
      </div>
  );
}; 